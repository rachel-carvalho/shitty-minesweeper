import { Component, Fragment } from 'react'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import '../css/app.styl'

export default class Home extends Component
  @getInitialProps: ->
    {}

  constructor: ->
    super()
    @state = started: false, flagging: false, foundBombs: 0

  handleRestart: =>
    @setState started: false, foundBombs: 0

  handleFlagToggle: =>
    @setState (state) -> flagging: !state.flagging

  render: ->
    {started, flagging, foundBombs} = @state
    rows = 15
    columns = 10
    bombs = 28

    <Fragment>
      <Toolbar bombs={bombs} foundBombs={foundBombs} started={started} flagging={flagging} onRestart={@handleRestart} onFlagToggle={@handleFlagToggle} />
      <Board flagging={flagging} rows={rows} columns={columns} bombs={bombs} started={started} />
    </Fragment>
