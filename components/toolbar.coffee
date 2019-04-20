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
    {bombs, foundBombs, flagging, dead, won, best, onFlagToggle} = @props
    {elapsed} = @state

    remaining = bombs - foundBombs

    <div id="toolbar">
      <span id="bombs">{remaining.toString().padStart(bombs.toString().length, 0)}</span>
      <button onClick={@handleRestart}>
        {if dead
          '😵'
        else if won
          '😎'
        else
          '🙂'
        }
      </button>
      <button onClick={onFlagToggle}>{if flagging then '🚩' else '💣'}</button>
      <time>{elapsed.toString().padStart(3, 0)}</time>
      {if best
        <span id="best">Best: {best.elapsed}</span>
      }
    </div>
