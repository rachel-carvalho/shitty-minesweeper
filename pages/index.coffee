import { Component, Fragment } from 'react'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import '../css/app.styl'

export default class Home extends Component
  @getInitialProps: ->
    {}

  constructor: ->
    super()
    @state = started: false, flagging: false

  handleFlagToggle: =>
    @setState (state) -> flagging: !state.flagging

  render: ->
    {started, flagging} = @state

    <Fragment>
      <Toolbar started={started} flagging={flagging} onFlagToggle={@handleFlagToggle} />
      <Board />
    </Fragment>
