'use strict'

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsPath:"assets",//静态资源路径
        port: 80,
        distPath: "/dist",
        appPath: "/src",
        webPath:'/marketing',
        mock: {
            "status": false,
            "base": "/",
            "url": "http://localhost:8080"
        }
    },
    dev: {
        env: require('./dev.env'),
        autoOpenBrowser: true,
        proxyTable: {
            '/marketing': {
                target: 'http://10.0.2.61:58000',
                changeOrigin: true
            }
        },
        cssSourceMap: false
    },
    prod: {
        env: require('./prod.env'),
        autoOpenBrowser: false,
        proxyTable: {
            '/marketing': {
                target: 'http://10.0.2.61:58000',
                changeOrigin: true
            }
        },
        cssSourceMap: false
    }
}
