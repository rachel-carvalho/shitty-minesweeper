import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  render: ->
    {row, column, bomb, neighbors} = @props
    <button className={"bomb" if bomb}>{neighbors if neighbors}</button>
