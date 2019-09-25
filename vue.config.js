let webpack = require('webpack')
// // NOTE: Uncomment when you need bundle analyzer
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const root = path.resolve(__dirname, resolveApp('src'))

module.exports = {
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
    plugins: [
      new webpack.IgnorePlugin(/ed25519/),
      // // NOTE: Uncomment when you need bundle analyzer
      // new BundleAnalyzerPlugin()
    ],
    resolve: {
      symlinks: false,
      alias: {
        'Assets': `${root}/assets`,
        'Store': `${root}/store`,
        'Components': `${root}/components`,
        'Constants': `${root}/constants`,
        'Common': `${root}/common`,
        'Router': `${root}/router`,
        'Utils': `${root}/utils`,
        'Services': `${root}/services`
      }
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sourceMap: true,
        sourceMapContents: false,
        data: ``
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('resolve-url-loader')
      .loader('resolve-url-loader')
      .before('sass-loader')
      .end()
      .end()
      .oneOf('vue-modules')
      .use('resolve-url-loader')
      .loader('resolve-url-loader')
      .before('sass-loader')
      .end()
      .end()
      .oneOf('normal')
      .use('resolve-url-loader')
      .loader('resolve-url-loader')
      .before('sass-loader')
      .end()
      .end()
      .oneOf('normal-modules')
      .use('resolve-url-loader')
      .loader('resolve-url-loader')
      .before('sass-loader')
      .end()
      .end()
  }
}
