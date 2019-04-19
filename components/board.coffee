import 'array-flat-polyfill'
import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  constructor: (props) ->
    super(props)
    @state = distributed: false, bombLocations: [], dead: false, opened: []
    @recentlyOpened = []

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

    @setState {distributed: true, bombLocations}

  bomb: (row, column) ->
    {bombLocations} = @state
    bombLocations.some (bomb) -> bomb[0] == row && bomb[1] == column

  neighbors: (row, column) ->
    return if @bomb(row, column)
    @surrounding(row, column)
      .filter (item) => @bomb(...item)
      .length

  surrounding: (row, column) ->
    [(row - 1)..(row + 1)]
      .filter (row) -> row >= 0
      .map (row) ->
        [(column - 1)..(column + 1)]
          .filter (column) -> column >= 0
          .map (column) -> [row, column]
      .flat()

  handleOpen: (row, column) =>
    @distribute(row, column) unless @state.distributed

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

  componentDidUpdate: =>
    @cascadeOpening()

  handleDeath: =>
    @setState dead: true
    # TODO: call parent's onDie
    console.log 'ded'

  opened: (row, column) ->
    @state.opened.some (item) -> item[0] == row && item[1] == column

  render: ->
    {rows, columns} = @props
    {dead} = @state

    <div id="board">
      {[0...rows].map (row) =>
        <div key={row}>
          {[0...columns].map (column) =>
            <Cell key={column} row={row} column={column} bomb={@bomb(row, column)} opened={@opened(row, column)} dead={dead} neighbors={@neighbors(row, column)} onOpen={@handleOpen} onDeath={@handleDeath} />
          }
        </div>
      }
    </div>
