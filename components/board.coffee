import 'array-flat-polyfill'
import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  constructor: (props) ->
    super(props)

    @initialState = distributed: false, bombLocations: [], dead: false, opened: [], flagged: [], game: ''
    @state = @initialState
    @recentlyOpened = []

  componentDidUpdate: (prevProps) =>
    return @reset() if prevProps.started && !@props.started

    if @firstOpening
      [row, column] = @firstOpening
      @firstOpening = null
      return @handleOpen(row, column)

    @cascadeOpening()

  reset: ->
    @recentlyOpened = []
    @firstOpening = null
    @setState @initialState

  distribute: (row, column) ->
    {rows, columns, bombs} = @props
    all = [0...rows]
      .map (row) -> [0...columns].map (column) -> [row, column]
      .flat()
      .filter (item) -> item[0] != row || item[1] != column

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
      {flagged} = state

      if added
        flagged.push [row, column]
        onFlagAdded()
      else
        flagged = flagged.filter (item) -> item[0] != row || item[1] != column
        onFlagRemoved()

      {flagged}

  handleDeath: =>
    @setState dead: true
    @props.onDeath()

  opened: (row, column) ->
    @state.opened.some (item) -> item[0] == row && item[1] == column

  flagged: (row, column) ->
    @state.flagged.some (item) -> item[0] == row && item[1] == column

  handleExpand: (row, column, neighbors) =>
    surrounding = @surrounding(row, column)
    unflagged = surrounding.filter (item) => !@flagged(...item)

    if unflagged.length == (surrounding.length - neighbors)
      unflagged.forEach (item) =>
        return @handleDeath() if @bomb(...item)
        @handleOpen(...item)

  render: ->
    {rows, columns, flagging} = @props
    {dead, game} = @state

    <div id="board">
      {[0...rows].map (row) =>
        <div key={row}>
          {[0...columns].map (column) =>
            <Cell key={column} row={row} column={column} flagging={flagging} bomb={@bomb(row, column)}
              opened={@opened(row, column)} dead={dead} neighbors={@neighbors(row, column)} game={game}
              onFlag={@handleFlag} onOpen={@handleOpen} onExpand={@handleExpand} onDeath={@handleDeath} />
          }
        </div>
      }
    </div>
