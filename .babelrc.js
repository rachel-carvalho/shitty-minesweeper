const prod = process.env.NODE_ENV === 'production'

const env = {
  'process.env.BACKEND_URL': prod ? '/shitty-minesweeper' : ''
}

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]]
}
