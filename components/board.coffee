import 'array-flat-polyfill'
import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  constructor: (props) ->
    super(props)
    @state = distributed: false, bombLocations: [], dead: false, opened: []

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

    bombLocations

  bomb: (row, column, state) ->
    {bombLocations} = (state || @state)
    bombLocations.some (bomb) -> bomb[0] == row && bomb[1] == column

  neighbors: (row, column, state) ->
    return if @bomb(row, column, state)
    @surrounding(row, column)
      .filter (item) => @bomb(...item, state)
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
    @setState (state) =>
      newState = {}
      newState.opened = @openAll([[row, column]], state)
      unless state.distributed
        newState.bombLocations = @distribute(row, column)
        newState.distributed = true
      surrounding = @surrounding(row, column)
      neighbors = @neighbors(row, column, newState)
      newState.opened = @openAll(surrounding, newState) unless neighbors
      newState

  openAll: (items, state) ->
    opened = state.opened.slice(0)
    items.forEach (item) -> opened.push item
    opened

  handleDeath: =>
    @setState dead: true
    # TODO: call parent's onDie
    console.log 'ded'

  render: ->
    {rows, columns} = @props
    {dead, opened} = @state

    console.log opened

    <div id="board">
      {[0...rows].map (row) =>
        <div key={row}>
          {[0...columns].map (column) =>
            <Cell key={column} row={row} column={column} bomb={@bomb(row, column)} dead={dead} neighbors={@neighbors(row, column)} onOpen={@handleOpen} onDeath={@handleDeath} />
          }
        </div>
      }
    </div>
