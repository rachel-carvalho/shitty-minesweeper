// Based on https://github.com/alin23/next-coffeescript (which is no longer supported)
// the only difference is the removal of hot-self-accept-loader
// depends on `coffee-loader`

module.exports = (nextConfig = {}) => {
  if (!nextConfig.pageExtensions) {
    nextConfig.pageExtensions = ['jsx', 'js']
  }

  if (nextConfig.pageExtensions.indexOf('coffee') === -1) {
    nextConfig.pageExtensions.unshift('coffee')
  }

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const path = require('path')
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const { dir, defaultLoaders, dev, isServer } = options

      config.resolve.extensions.push('.coffee')

      config.module.rules.push({
        test: /\.(coffee)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'coffee-loader',
            options: Object.assign({}, nextConfig.coffeescriptLoaderOptions),
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
