var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    'list_builder': APP_DIR + '/list_builder.js',
    'dynamic_form': APP_DIR + '/dynamic_form.js',
    'floating_action_button': APP_DIR + '/floating_action_button.js',
    'header_nav': APP_DIR + '/header_nav.js',
    'table_list': APP_DIR + '/table_list.js',
    'login': APP_DIR + '/login.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test: /\.tag$/,
        loader: 'riot-tag-loader',
        query: {
          type: 'es6' // transpile the riot tags using babel
        }
      },
      {
        test : /\.js?/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' 
      }
    ]
  }
};

module.exports = config;
