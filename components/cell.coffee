import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  constructor: (props) ->
    super(props)
    @state = open: false

  handleClick: =>
    @setState open: true
    {row, column, bomb, onDeath} = @props
    return onDeath(row, column) if bomb

  render: ->
    {row, column, bomb, neighbors, dead} = @props
    {open} = @state

    classes = []
    classes.push 'open' if (open || (dead && bomb))

    <button onClick={@handleClick} className={classes}>
      {neighbors if open && neighbors}
      {'💣' if (open || dead) && bomb}
    </button>
