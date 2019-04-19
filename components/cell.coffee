import React, {Component, Fragment} from 'react'

export default class Cell extends Component
  constructor: (props) ->
    super(props)
    @initialState = open: false, flagged: false, exploded: false
    @state = @initialState

  componentDidUpdate: (prevProps) =>
    return if prevProps.game == @props.game
    @setState @initialState

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
    @setState (state) ->
      flagged = !state.flagged
      onFlag(row, column, flagged)
      {flagged}

  open: ->
    {row, column, bomb, onDeath, onOpen} = @props
    @setState open: true
    if bomb
      @setState exploded: true
      return onDeath(row, column)
    onOpen(row, column)

  render: ->
    {row, column, bomb, neighbors, dead, opened} = @props
    {open, flagged, exploded} = @state

    open = open || opened

    classes = []
    classes.push 'open' if (open || exploded || (dead && bomb && !flagged))
    classes.push 'wrong-flag' if dead && flagged && !bomb

    <button onClick={@handleClick} className={classes}>
      {neighbors if open && neighbors}
      {'💣' if (open || dead) && bomb && !exploded && !flagged}
      {'🚩' if flagged}
      {'💥' if exploded}
    </button>
