'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.base.js');

config.output.path = path.resolve(__dirname, '../.build');
config.output.pathinfo = true;

config.plugins.push(new ExtractTextPlugin('[name].css', { disable: true }));
config.plugins.push(new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('testing')}));

module.exports = config;