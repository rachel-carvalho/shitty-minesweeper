import { Component, Fragment } from 'react'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import '../css/app.styl'

export default class Home extends Component
  @getInitialProps: ->
    {}

  constructor: ->
    super()
    @initialState = started: false, flagging: false, foundBombs: 0, dead: false, startedAt: null, endedAt: null, won: false
    @state = @initialState

  handleRestart: =>
    @setState @initialState

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

  handleWin: =>
    @setState won: true, endedAt: new Date()

  render: ->
    {started, startedAt, endedAt, flagging, foundBombs, dead, won} = @state
    rows = 15
    columns = 10
    bombs = 28

    <Fragment>
      <Toolbar bombs={bombs} foundBombs={foundBombs} startedAt={startedAt} endedAt={endedAt} flagging={flagging} dead={dead} won={won} onRestart={@handleRestart} onFlagToggle={@handleFlagToggle} />
      <Board flagging={flagging} rows={rows} columns={columns} bombs={bombs} started={started} won={won} onFlagAdded={@handleFlagAdded} onStart={@handleStart} onFlagRemoved={@handleFlagRemoved} onDeath={@handleDeath} onWin={@handleWin} />
    </Fragment>
