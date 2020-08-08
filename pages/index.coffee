import { Component } from 'react'
import Minesweeper from '../components/minesweeper'
import Router from 'next/router'

export default class Home extends Component
  @getInitialProps: ({query, req}) ->
    rows = query?.rows || 15
    columns = query?.columns || 10
    bombs = query?.bombs

    {rows, columns, bombs}

  constructor: ->
    super()
    Router.events.on 'routeChangeComplete', @handleRouteChangeComplete

  parseSearch: ->
    return @props unless global.location?.search

    pairs = location.search.substring(1).split('&')
      .map (it) ->
        [key, value] = it.split('=')
        "#{key}": value

    search = Object.assign(...pairs)

    {...@props, ...search}

  handleRouteChangeComplete: (url) =>
    @setState @parseSearch()

  render: ->
    {rows, columns, bombs: customBombs} = @state || @parseSearch()
    bombs = if customBombs then parseInt(customBombs) else Math.round(columns * rows * 0.18)

    <Minesweeper rows={rows} columns={columns} bombs={bombs} />
