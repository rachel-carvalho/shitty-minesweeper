import React, {Component, Fragment} from 'react'

export default class Board extends Component
  render: ->
    {rows, columns, bombs} = @props
    <div>
      board {rows} x {columns} with {bombs} bombs
    </div>
