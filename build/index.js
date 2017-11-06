/**
 * Created by ArvinChen9539 on 2017/11/6.
 */
require('shelljs/global')
const ora = require('ora')//loading效果
const chalk = require('chalk')//控制台颜色插件
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.prod.config')

//控制台显示loading效果
const spinner = ora('building for '+process.env.NODE_ENV+'...')
spinner.start()

const compiler = webpack(webpackConfig)

//进度条
const ProgressPlugin = require('webpack/lib/ProgressPlugin')

compiler.apply(new ProgressPlugin())

compiler.run((err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
})