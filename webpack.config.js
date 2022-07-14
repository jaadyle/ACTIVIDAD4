const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    plugins:[
      new WorkboxPlugin.GenerateSW({
          clientsClaim:true,
          skipWaiting:true
      })
  ],
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css?$/,
          use: [ 'style-loader', 'css-loader' ],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: 'file-loader?name=./images/[name].[ext]',
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve( __dirname, 'public/index.html' ),
          filename: 'index.html',
        })
      ],
    };
    