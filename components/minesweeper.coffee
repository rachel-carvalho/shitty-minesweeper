import { Component, Fragment } from 'react'
import Head from 'next/head'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import Settings from '../components/settings'

export default class Minesweeper extends Component
  constructor: ->
    super()
    @initialState = beforeLoad: true, started: false, flagging: false, foundBombs: 0, dead: false, startedAt: null, endedAt: null, won: false, best: null, settings: false, pressing: false
    @loadedState = false
    @state = {...@initialState}

  loadState: ->
    previousState = try JSON.parse(@storage().currentGame)
    @loadedState = true
    previousState.startedAt = new Date(previousState.startedAt) if previousState?.startedAt
    previousState.endedAt = new Date(previousState.endedAt) if previousState?.endedAt

    {rows, columns, bombs} = @props
    if previousState && (previousState.rows != rows || previousState.columns != columns || previousState.bombs != bombs)
      previousState = null

    previousState || @initialState

  componentDidMount: ->
    @setState {...@loadState(), best: @best(), beforeLoad: false}

  handleRestart: =>
    @resetState()
    @setState {...@initialState, best: @best()}

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

  storage: ->
    global.localStorage || {}

  handleWin: =>
    endedAt = new Date()
    @saveTime(endedAt)
    @setState {won: true, endedAt, best: @best()}

  saveTime: (endedAt) ->
    {rows, columns, bombs} = @props
    game = {startedAt: @state.startedAt, endedAt}
    records = @records()
    records["#{rows}x#{columns}_#{bombs}"] ||= []
    records["#{rows}x#{columns}_#{bombs}"].push game
    @storage().shittyMinesweeper = JSON.stringify records

  records: ->
    return {} unless @storage().shittyMinesweeper
    records = JSON.parse(@storage().shittyMinesweeper)

    for size, games of records
      games.forEach (game) ->
        game.startedAt = new Date(Date.parse(game.startedAt))
        game.endedAt = new Date(Date.parse(game.endedAt))
        ms = game.endedAt - game.startedAt
        game.elapsed = Math.round(ms / 1000)

      games.sort (a, b) -> a.elapsed - b.elapsed

    records

  best: ->
    {rows, columns, bombs} = @props
    (@records()["#{rows}x#{columns}_#{bombs}"] || [])[0]

  handleViewSettingsClick: =>
    @handleRestart()
    @setState settings: true

  handleCloseSettings: =>
    @setState settings: false

  handlePress: =>
    @setState pressing: true

  handleUnpress: =>
    @setState pressing: false

  saveState: ->
    return unless @loadedState
    savedState = @loadState()
    {rows, columns, bombs} = @props
    {sRows, sColumns, sBombs} = savedState

    if !savedState || !sRows || (rows == sRows && columns == sColumns && bombs == sBombs)
      @storage().currentGame = JSON.stringify({...@state, rows, columns, bombs})
    else
      @resetState()

  resetState: ->
    @storage().currentGame = null
    @storage().currentGameBoard = null

  render: ->
    {started, startedAt, endedAt, flagging, foundBombs, dead, won, best, settings, pressing, beforeLoad} = @state
    {rows, columns, bombs} = @props

    @saveState()

    <Fragment>
      <Head>
        <title>Shitty Minesweeper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {if settings
        <Settings {...@props} onClose={@handleCloseSettings} />
      else
        <Fragment>
          <button id="view-settings" onClick={@handleViewSettingsClick}>⚙️</button>
          <Toolbar bombs={bombs} foundBombs={foundBombs} startedAt={startedAt} endedAt={endedAt} flagging={flagging}
            dead={dead} won={won} best={best} pressing={pressing}
            onRestart={@handleRestart} onFlagToggle={@handleFlagToggle} />
          <Board flagging={flagging} rows={rows} columns={columns} bombs={bombs} started={started} won={won}
            game={startedAt} beforeLoad={beforeLoad}
            onStart={@handleStart} onFlagAdded={@handleFlagAdded} onFlagRemoved={@handleFlagRemoved}
            onPress={@handlePress} onUnpress={@handleUnpress}
            onDeath={@handleDeath} onWin={@handleWin} />
        </Fragment>
      }
    </Fragment>
