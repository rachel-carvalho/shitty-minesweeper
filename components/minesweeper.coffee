import { Component, Fragment } from 'react'
import Head from 'next/head'
import Toolbar from '../components/toolbar'
import Board from '../components/board'
import Settings from '../components/settings'
import '../css/app.styl'

export default class Minesweeper extends Component
  constructor: ->
    super()
    @initialState = started: false, flagging: false, foundBombs: 0, dead: false, startedAt: null, endedAt: null, won: false, best: null, settings: false, pressing: false
    @state = {...@initialState}

  componentDidMount: ->
    @setState best: @best()

  handleRestart: =>
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

  render: ->
    {started, startedAt, endedAt, flagging, foundBombs, dead, won, best, settings, pressing} = @state
    {rows, columns, bombs} = @props

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
            onStart={@handleStart} onFlagAdded={@handleFlagAdded} onFlagRemoved={@handleFlagRemoved}
            onPress={@handlePress} onUnpress={@handleUnpress}
            onDeath={@handleDeath} onWin={@handleWin} />
        </Fragment>
      }
    </Fragment>
