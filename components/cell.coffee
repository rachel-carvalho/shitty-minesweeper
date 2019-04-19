import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  constructor: (props) ->
    super(props)
    @state = open: false

  handleClick: =>
    @setState open: true
    {row, column, bomb, onOpen, onDeath} = @props
    return onDeath(row, column) if bomb
    onOpen(row, column)

  render: ->
    {row, column, bomb, neighbors, dead, opened} = @props
    {open} = @state

    open = open || opened

    classes = []
    classes.push 'open' if (open || (dead && bomb))

    <button onClick={@handleClick} className={classes}>
      {neighbors if open && neighbors}
      {'💣' if (open || dead) && bomb}
    </button>
