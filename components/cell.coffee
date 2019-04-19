import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  constructor: (props) ->
    super(props)
    @state = open: false, flagged: false

  handleClick: =>
    {row, column, flagging, bomb, onOpen, onFlag, onDeath} = @props
    if flagging
      return if @state.open || @props.opened
      @setState flagged: true
      onFlag(row, column)
    else
      @setState open: true
      return onDeath(row, column) if bomb
      onOpen(row, column)

  render: ->
    {row, column, bomb, neighbors, dead, opened} = @props
    {open, flagged} = @state

    open = open || opened

    classes = []
    classes.push 'open' if (open || (dead && bomb))

    <button onClick={@handleClick} className={classes}>
      {neighbors if open && neighbors}
      {'💣' if (open || dead) && bomb}
      {'🚩' if flagged}
    </button>
