const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /(\.scss|\.sass|\.css)/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'], 
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png)$/,
        use: ['file-loader', {
          loader: "image-webpack-loader"
        }]
        
      }
      
    ]
  }, 
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ],
  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin(), new OptimizeCssAssetsPlugin())
}