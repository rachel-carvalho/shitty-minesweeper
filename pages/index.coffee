import { Component, Fragment } from 'react'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import '../css/app.styl'

export default class Home extends Component
  @getInitialProps: ->
    {}

  constructor: ->
    super()
    @state = started: false, flagging: false, foundBombs: 0, dead: false, startedAt: null, endedAt: null

  handleRestart: =>
    @setState started: false, foundBombs: 0, startedAt: null

  handleStart: (startedAt) =>
    @setState {started: true, startedAt}

  handleFlagToggle: =>
    @setState (state) -> flagging: !state.flagging

  handleFlagAdded: =>
    @setState (state) ->
      foundBombs: state.foundBombs + 1

  handleFlagRemoved: =>
    @setState (state) ->
      foundBombs: state.foundBombs - 1

  handleDeath: =>
    @setState dead: true, endedAt: new Date()

  render: ->
    {started, startedAt, endedAt, flagging, foundBombs} = @state
    rows = 15
    columns = 10
    bombs = 28

    <Fragment>
      <Toolbar bombs={bombs} foundBombs={foundBombs} startedAt={startedAt} endedAt={endedAt} flagging={flagging} onRestart={@handleRestart} onFlagToggle={@handleFlagToggle} />
      <Board flagging={flagging} rows={rows} columns={columns} bombs={bombs} started={started} onFlagAdded={@handleFlagAdded} onStart={@handleStart} onFlagRemoved={@handleFlagRemoved} onDeath={@handleDeath} />
    </Fragment>
