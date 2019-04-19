import React, {Component, Fragment} from 'react'
import Cell from './cell'

export default class Board extends Component
  render: ->
    {rows, columns, bombs} = @props
    <div id="board">
      {[1..rows].map (row) ->
        <div key={row}>
          {[1..columns].map (column) ->
            <Cell key={"#{row},#{column}"} row={row} column={column} />
          }
        </div>
      }
    </div>
