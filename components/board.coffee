import 'array-flat-polyfill'
import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  constructor: (props) ->
    super(props)

    @initialState = distributed: false, bombLocations: [], dead: false, opened: [], flagged: [], pressed: [], exploded: [], game: null
    @state = @initialState
    @recentlyOpened = []
    @couldHaveWon = false
    @loadedState = false
    @previousBoardBeforeLoad = null

  loadState: ->
    previousState = try JSON.parse(@storage().currentGameBoard)
    @loadedState = true
    previousState.game = new Date(previousState.game) if previousState?.game

    @previousBoardBeforeLoad = previousState if @props.beforeLoad

    if @props.beforeLoad
      previousState = null
    previousState

  componentDidMount: ->
    @restoreState()

  restoreState: (state) ->
    stateToLoad = state || @loadState()

    stateToLoad = null if JSON.stringify(stateToLoad?.game) != JSON.stringify(@props.game)

    @setState {...(stateToLoad || @initialState)}

  componentDidUpdate: (prevProps) =>
    return @restoreState(@previousBoardBeforeLoad) if prevProps.beforeLoad && !@props.beforeLoad

    return @reset() if prevProps.started && !@props.started

    if @firstOpening
      [row, column] = @firstOpening
      @firstOpening = null
      return @handleOpen(row, column)

    @cascadeOpening()
    @checkIfWon()

  reset: ->
    @recentlyOpened = []
    @firstOpening = null
    @couldHaveWon = false
    @setState @initialState

  distribute: (row, column) ->
    {rows, columns, bombs} = @props
    all = [0...rows]
      .map (row) -> [0...columns].map (column) -> [row, column]
      .flat()
      .filter (item) ->
        [tileRow, tileColumn] = item
        tileRow < (row - 1) || tileRow > (row + 1) || tileColumn < (column - 1) || tileColumn > (column + 1)

    bombLocations = []

    [0...bombs].forEach ->
      index = Math.round(Math.random() * (all.length - 1))
      bombLocations.push all.splice(index, 1)[0]

    bombLocations.sort (a, b) -> "#{a[0]}, #{a[1]}" - "#{b[0]}, #{b[1]}"

    game = new Date()

    @setState {distributed: true, game, bombLocations}
    @props.onStart(game)

  bomb: (row, column) ->
    {bombLocations} = @state
    bombLocations.some (bomb) -> bomb[0] == row && bomb[1] == column

  neighbors: (row, column) ->
    return if @bomb(row, column)
    @surrounding(row, column)
      .filter (item) => @bomb(...item)
      .length

  surrounding: (row, column) ->
    {rows, columns} = @props
    [(row - 1)..(row + 1)]
      .filter (row) -> row >= 0 && row < rows
      .map (row) ->
        [(column - 1)..(column + 1)]
          .filter (column) -> column >= 0 && column < columns
          .map (column) -> [row, column]
      .flat()

  handleOpen: (row, column) =>
    unless @state.distributed
      @distribute(row, column)
      return @firstOpening = [row, column]

    @setState (state) =>
      return if state.opened.some (item) -> item[0] == row && item[1] == column
      opened = state.opened.slice(0)
      opened.push [row, column]
      @recentlyOpened.push [row, column]
      {opened}

  cascadeOpening: ->
    while item = @recentlyOpened.shift()
      break unless item
      [row, column] = item

      neighbors = @neighbors(row, column)
      unless neighbors
        surrounding = @surrounding(row, column)
        surrounding.forEach (item) => @handleOpen(...item)

  handleFlag: (row, column, added) =>
    {onFlagAdded, onFlagRemoved} = @props
    @setState (state) ->
      flagged = state.flagged.slice(0)

      if added
        flagged.push [row, column]
        onFlagAdded()
        @couldHaveWon = true
      else
        flagged = flagged.filter (item) -> item[0] != row || item[1] != column
        onFlagRemoved()

      {flagged}

  handleDeath: (row, column) =>
    @setState dead: true, exploded: [row, column]
    @props.onDeath()

  opened: (row, column) ->
    @state.opened.some (item) -> item[0] == row && item[1] == column

  flagged: (row, column) ->
    @state.flagged.some (item) -> item[0] == row && item[1] == column

  pressed: (row, column) ->
    @state.pressed.some (item) -> item[0] == row && item[1] == column

  exploded: (row, column) ->
    [eRow, eColumn] = @state.exploded
    eRow == row && eColumn == column

  unflagged: (row, column) ->
    surrounding = @surrounding(row, column)
    unflagged = surrounding.filter (item) => !@flagged(...item)
    {surrounding, unflagged}

  handleExpand: (row, column, neighbors) =>
    {surrounding, unflagged} = @unflagged(row, column)

    if unflagged.length == (surrounding.length - neighbors)
      unflagged.forEach (item) =>
        return @handleDeath() if @bomb(...item)
        @handleOpen(...item)
        @couldHaveWon = true

  handlePress: (row, column, opened) =>
    toPress = [[row, column]]

    if opened
      {unflagged} = @unflagged(row, column)
      toPress = [...unflagged, ...toPress]

    @setState (state) =>
      return if state.pressed.some (item) -> item[0] == row && item[1] == column
      pressed = state.pressed.slice(0)
      pressed.push.apply(pressed, toPress)
      @props.onPress()
      {pressed}

  handleUnpress: (row, column) =>
    @setState pressed: []
    @props.onUnpress()

  checkIfWon: ->
    return if @props.won || !@couldHaveWon
    flaggedAll = @state.flagged.length == @props.bombs
    openedAll = @state.opened.length == (@props.rows * @props.columns) - @props.bombs
    if flaggedAll && openedAll
      @props.onWin()

  storage: ->
    global.localStorage || {}

  render: ->
    {rows, columns, flagging, won} = @props
    {dead, game} = @state

    @storage().currentGameBoard = JSON.stringify(@state) if @loadedState

    <div id="board">
      {[0...rows].map (row) =>
        <div className="row" key={row}>
          {[0...columns].map (column) =>
            <Cell key={column} row={row} column={column} flagging={flagging} bomb={@bomb(row, column)}
              opened={@opened(row, column)} pressed={@pressed(row, column)} won={won}
              flagged={@flagged(row, column)} exploded={@exploded(row, column)}
              dead={dead} neighbors={@neighbors(row, column)} game={game}
              onFlag={@handleFlag} onOpen={@handleOpen} onExpand={@handleExpand} onDeath={@handleDeath}
              onPress={@handlePress} onUnpress={@handleUnpress} />
          }
        </div>
      }
    </div>
