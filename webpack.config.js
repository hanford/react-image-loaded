const webpack = require('webpack')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
}

const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
}

module.exports = {
  entry: {
    'react-image-loaded.min': './src/index.js'
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }]
  },
  output: {
    filename: './dist/[name].js',
    libraryTarget: 'umd',
    library: 'ReactImageLoaded'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
