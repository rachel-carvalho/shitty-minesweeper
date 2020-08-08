import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class Settings extends Component
  constructor: (props) ->
    super(props)
    @initialState = rows: null, columns: null, bombs: null
    @state = @initialState

  componentDidUpdate: (prevProps) ->
    return if prevProps == @props
    @setState @initialState

  defaultBombs: ({rows, columns}) ->
    Math.round(rows * columns * 0.18)

  handleRowsChange: (e) =>
    @setState rows: e.target.value

  handleColumnsChange: (e) =>
    @setState columns: e.target.value

  handleBombsChange: (e) =>
    bombs = e.target.value
    bombs = null if parseInt(bombs) == @defaultBombs(@currentRowsColumns())
    @setState {bombs}

  handleSubmit: (e) =>
    e.preventDefault()
    {rows, columns, bombs} = @currentValues()
    path = "/?rows=#{rows}&columns=#{columns}&bombs=#{bombs}"

    Router.push path, process.env.BACKEND_URL + path

  currentRowsColumns: ->
    {rows, columns} = @state
    rows ?= @props.rows
    columns ?= @props.columns
    {rows, columns}

  calculateBombs: (rows, columns) ->
    return '' unless (rows && columns)
    @defaultBombs({rows, columns})

  currentValues: ->
    {rows, columns} = @currentRowsColumns()
    {bombs} = @state
    bombs ||= @calculateBombs(rows, columns)
    {rows, columns, bombs}

  render: ->
    {onClose} = @props
    {rows, columns, bombs} = @currentValues()

    root = "#{process.env.BACKEND_URL}/"

    <section id="settings">
      <h1>
        Settings
        <button className="close" onClick={onClose}>✕</button>
      </h1>

      <form onSubmit={@handleSubmit}>
        <fieldset>
          <legend>Board size</legend>

          <div className="field">
            <label htmlFor="rows">Rows: </label>
            <input id="rows" name="rows" type="number" value={rows} onChange={@handleRowsChange} />
          </div>
          <div className="field">
            <label htmlFor="columns">Columns: </label>
            <input id="columns" name="columns" type="number" value={columns} onChange={@handleColumnsChange} />
          </div>
          <div className="field">
            <label htmlFor="bombs">Bombs: </label>
            <input id="bombs" name="bombs" type="number" value={bombs} onChange={@handleBombsChange} />
          </div>
          <div className="actions">
            <Link href="/" as={root}><a>Use defaults</a></Link>
            <button>Save</button>
          </div>
        </fieldset>
      </form>
    </section>
