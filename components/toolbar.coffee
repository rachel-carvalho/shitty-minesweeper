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
    ms = new Date() - @props.startedAt
    @setState elapsed: Math.round(ms / 1000)

  render: ->
    {bombs, foundBombs, flagging, onFlagToggle, onRestart} = @props
    {elapsed} = @state

    remaining = bombs - foundBombs

    <div id="toolbar">
      <time>{elapsed.toString().padStart(3, 0)}</time>
      <span>{remaining}</span>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onFlagToggle}>
        {if flagging then 'Bomb' else 'Flag'}
      </button>
    </div>
