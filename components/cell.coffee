import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  render: ->
    {row, column, bomb} = @props
    <button className={"bomb" if bomb}></button>
