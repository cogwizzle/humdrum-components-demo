var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'demo/dist');
var APP_DIR = path.resolve(__dirname, './');

var config = {
  entry: {
    'list_builder': APP_DIR + '/demo/src/list_builder.js',
    'dynamic_form': APP_DIR + '/demo/src/dynamic_form.js',
    'floating_action_button': APP_DIR + '/demo/src/floating_action_button.js',
    'header_nav': APP_DIR + '/demo/src/header_nav.js',
    'table_list': APP_DIR + '/demo/src/table_list.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          type: 'es6' // transpile the riot tags using babel
        }
      },
      {
        test : /\.js?/,
        include : APP_DIR,
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

