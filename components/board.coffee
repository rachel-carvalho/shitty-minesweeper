import 'array-flat-polyfill'
import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  constructor: (props) ->
    super(props)
    @state = distributed: false, bombLocations: []

  componentDidMount: ->
    @distribute()

  distribute: ->
    {rows, columns, bombs} = @props
    all = [0...rows]
      .map (row) -> [0...columns].map (column) -> [row, column]
      .flat()

    bombLocations = []

    [0...bombs].forEach ->
      index = Math.round(Math.random() * (all.length - 1))
      bombLocations.push all.splice(index, 1)[0]

    bombLocations.sort (a, b) -> "#{a[0]}, #{a[1]}" - "#{b[0]}, #{b[1]}"

    @setState {distributed: true, bombLocations}

  bomb: (row, column) ->
    {bombLocations} = @state
    bombLocations.some (bomb) -> bomb[0] == row && bomb[1] == column

  render: ->
    {rows, columns} = @props

    <div id="board">
      {[0...rows].map (row) =>
        <div key={row}>
          {[0...columns].map (column) =>
            <Cell key={"#{row},#{column}"} row={row} column={column} bomb={@bomb(row, column)} />
          }
        </div>
      }
    </div>
