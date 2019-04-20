import { Component } from 'react'
import Minesweeper from '../components/minesweeper'

export default class Home extends Component
  @getInitialProps: ({query, req}) ->
    rows = query?.rows || 15
    columns = query?.columns || 10

    {rows, columns, defaultRows: !query?.rows, defaultColumns: !query?.columns}

  parseSearch: ->
    {defaultRows, defaultColumns} = @props
    return @props if !global.location?.search || !(defaultRows || defaultColumns)

    pairs = location.search.substring(1).split('&')
      .map (it) ->
        [key, value] = it.split('=')
        "#{key}": value

    search = Object.assign(...pairs)

    {...@props, ...search}

  render: ->
    {rows, columns} = @parseSearch()
    bombs = Math.round(columns * rows * 0.18)

    <Minesweeper rows={rows} columns={columns} bombs={bombs} />
