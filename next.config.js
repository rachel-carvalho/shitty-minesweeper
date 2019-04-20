const nib = require('nib')
const rupture = require('rupture')
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const withCoffeescript = require('next-coffeescript')

module.exports = withCoffeescript(
  withStylus({
    stylusLoaderOptions: {
      use: [
        nib(),
        rupture(),
        poststylus([
          autoprefixer({ flexbox: 'no-2009' }),
          require('postcss-css-variables'),
        ])
      ]
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/shitty-minesweeper' : ''
  })
)
