import React, {Component, Fragment} from 'react'

export default class Toolbar extends Component
  render: ->
    {bombs, foundBombs, flagging, onFlagToggle, onRestart} = @props

    remaining = bombs - foundBombs

    <div>
      <span>{remaining}</span>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onFlagToggle}>
        {if flagging then 'Bomb' else 'Flag'}
      </button>
    </div>
