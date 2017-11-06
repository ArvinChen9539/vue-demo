/**
 * Created by ArvinChen9539 on 2017/11/3.
 */
const express = require('express')//网络服务
const webpack = require('webpack')
const opn = require('opn')//返回生成的子进程的promise。
const config = require('../config/index')//系统配置项
const proxyMiddleware = require('http-proxy-middleware')//代理
const webpackConfig = require('../config/webpack.'+process.env.NODE_ENV+'.conf');

// 端口
const port = process.env.PORT || config.build.port || 80;
// 是否自动打开浏览器窗口
const autoOpenBrowser = Boolean(config.dev.autoOpenBrowser)
// 代理配置
const proxyTable = config[process.env.NODE_ENV].proxyTable

const app = express()
const compiler = webpack(webpackConfig)

//热重载插件
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)

// 插入自动刷新的脚本
compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// 设置代理请求
Object.keys(proxyTable).forEach(context => {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// html5回退处理
app.use(require('connect-history-api-fallback')())


app.use(devMiddleware)

app.use(hotMiddleware)

// serve pure static assets
/*const staticPath = path.posix.join(config.build.assetsPath);
app.use(staticPath, express.static('./assets'))*/

const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, err => {
    if (err) {
        console.log(err)
        return
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser) {
        opn(uri)
    }
})
