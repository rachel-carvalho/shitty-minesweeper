import React, {Component, Fragment} from 'react'

export default class Toolbar extends Component
  constructor: (props) ->
    super(props)
    @state = elapsed: 0

  componentDidMount: ->
    @intervalID = setInterval @calculateTime, 1000

  componentWillUnmount: ->
    clearInterval @intervalID

  calculateTime: =>
    return @setState elapsed: 0 unless @props.startedAt
    end = @props.endedAt || new Date()
    ms = end - @props.startedAt
    @setState elapsed: Math.round(ms / 1000)

  handleRestart: =>
    @setState elapsed: 0
    @props.onRestart()

  render: ->
    {bombs, foundBombs, flagging, onFlagToggle} = @props
    {elapsed} = @state

    remaining = bombs - foundBombs

    <div id="toolbar">
      <time>{elapsed.toString().padStart(3, 0)}</time>
      <span>{remaining}</span>
      <button onClick={@handleRestart}>Restart</button>
      <button onClick={onFlagToggle}>
        {if flagging then 'Bomb' else 'Flag'}
      </button>
    </div>
