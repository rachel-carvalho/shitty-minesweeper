import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class Settings extends Component
  constructor: (props) ->
    super(props)
    @state = rows: null, columns: null

  handleRowsChange: (e) =>
    @setState rows: e.target.value

  handleColumnsChange: (e) =>
    @setState columns: e.target.value

  handleSubmit: (e) =>
    e.preventDefault()
    {rows, columns} = @currentValues()
    path = "/?rows=#{rows}&columns=#{columns}"

    Router.push path, process.env.BACKEND_URL + path

  currentValues: ->
    {rows, columns} = @state
    rows ?= @props.rows
    columns ?= @props.columns
    {rows, columns}

  render: ->
    {onClose} = @props
    {rows, columns} = @currentValues()
    bombs = if rows && columns then Math.round(rows * columns * 0.18) else ''

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
            <label>Bombs: </label>
            <span>{bombs}</span>
          </div>
          <div className="actions">
            <Link href="/" as={root}><a>Use defaults</a></Link>
            <button>Save</button>
          </div>
        </fieldset>
      </form>
    </section>
