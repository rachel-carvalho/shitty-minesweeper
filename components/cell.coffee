import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  constructor: (props) ->
    super(props)
    @state = open: false, flagged: false

  handleClick: =>
    {dead, opened, flagging} = @props
    return if dead

    open = opened || @state.open

    return @expand() if open
    return @flag() if flagging
    @open()

  expand: ->
    {row, column, neighbors, onExpand} = @props
    onExpand(row, column, neighbors)

  flag: ->
    {row, column, onFlag} = @props
    @setState flagged: true
    onFlag(row, column)

  open: ->
    {row, column, bomb, onDeath, onOpen} = @props
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
