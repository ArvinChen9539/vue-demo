/**
 * Created by ArvinChen9539 on 2017/11/1.
 */
const path = require('path');
const webpack = require('webpack');
const config = require('../config/index');
const basePath = __dirname + "/..";

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(basePath + config.build.appPath + "/index.js"),//唯一入口文件
    output: {
        path: basePath + config.build.distPath,//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    plugins: [
        new webpack.BannerPlugin('杭州物点网络科技有限公司版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: basePath + config.build.appPath + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("style-[hash].css"),
        new CleanWebpackPlugin(
            ['*bundle-*.js', 'style-*.css',],　 //匹配删除的文件
            {
                root: basePath + config.build.distPath,
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//关闭删除文件
            }
        )
    ],
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }]
                })
            }, {
                test: /(\.vue)$/,
                loader: 'vue-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json'],
        /*alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }*/
    }
};