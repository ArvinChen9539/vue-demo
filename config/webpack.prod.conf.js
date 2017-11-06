/**
 * Created by ArvinChen9539 on 2017/11/1.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../build/webpack.base.conf');

module.exports = merge({
    output: {

    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()//压缩插件
    ]
}, baseConfig);