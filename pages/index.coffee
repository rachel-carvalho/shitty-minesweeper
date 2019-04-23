import { Component } from 'react'
import Minesweeper from '../components/minesweeper'

export default class Home extends Component
  @getInitialProps: ({query, req}) ->
    rows = query?.rows || 15
    columns = query?.columns || 10
    customBombs = query?.bombs

    {rows, columns, customBombs, defaultRows: !query?.rows, defaultColumns: !query?.columns}

  parseSearch: ->
    {defaultRows, defaultColumns, customBombs} = @props
    return @props if !global.location?.search || !(defaultRows || defaultColumns || customBombs)

    pairs = location.search.substring(1).split('&')
      .map (it) ->
        [key, value] = it.split('=')
        "#{key}": value

    search = Object.assign(...pairs)

    {...@props, ...search}

  render: ->
    {rows, columns, customBombs} = @parseSearch()
    bombs = if customBombs then parseInt(customBombs) else Math.round(columns * rows * 0.18)

    <Minesweeper rows={rows} columns={columns} bombs={bombs} />
