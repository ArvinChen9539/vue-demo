/**
 * Created by ArvinChen9539 on 2017/11/1.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../build/webpack.base.conf');
const config = require('./index')

module.exports = merge({
    output: {
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}, baseConfig);