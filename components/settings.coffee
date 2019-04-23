import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class Settings extends Component
  constructor: (props) ->
    super(props)
    @state = rows: null, columns: null, bombs: null

  handleRowsChange: (e) =>
    @setState rows: e.target.value

  handleColumnsChange: (e) =>
    @setState columns: e.target.value

  handleBombsChange: (e) =>
    @setState bombs: e.target.value

  handleSubmit: (e) =>
    e.preventDefault()
    {rows, columns, bombs} = @currentValues()
    path = "/?rows=#{rows}&columns=#{columns}&bombs=#{bombs}"

    Router.push path, process.env.BACKEND_URL + path

  currentValues: ->
    {rows, columns, bombs} = @state
    rows ?= @props.rows
    columns ?= @props.columns
    bombs ||= if rows && columns then Math.round(rows * columns * 0.18) else ''
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
