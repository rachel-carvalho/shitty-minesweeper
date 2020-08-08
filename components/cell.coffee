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
    {flagged} = @state
    return if dead
    return if flagged && !flagging

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

  handleMouseDown: =>
    {row, column, opened, onPress} = @props
    onPress(row, column, opened || @state.open)

  handleMouseUp: =>
    {row, column, onUnpress} = @props
    onUnpress(row, column)

  # touch start only needs to be bound so that mouse up and down also get triggered by touch events
  handleTouchStart: =>

  render: ->
    {row, column, bomb, neighbors, dead, opened, pressed} = @props
    {open, flagged, exploded} = @state

    open = open || opened

    classes = []
    classes.push 'open' if (open || exploded || (dead && bomb && !flagged))
    classes.push 'wrong-flag' if dead && flagged && !bomb
    classes.push 'neighbor' if neighbors
    classes.push "neighbor-#{neighbors}" if neighbors
    classes.push 'pressed' if pressed

    <button disabled={dead} className={classes.join ' '} onClick={@handleClick}
      onMouseDown={@handleMouseDown} onMouseUp={@handleMouseUp} onMouseOut={@handleMouseUp} onTouchStart={@handleTouchStart}>
      {neighbors if open && neighbors}
      {'💣' if (open || dead) && bomb && !exploded && !flagged}
      {'🚩' if flagged}
      {'💥' if exploded}
    </button>
