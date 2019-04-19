import React, {Component, Fragment} from 'react'

export default class Toolbar extends Component
  render: ->
    {flagging, onFlagToggle} = @props

    <div>
      <button>Restart</button>
      <button onClick={onFlagToggle}>
        {if flagging then 'Bomb' else 'Flag'}
      </button>
    </div>
