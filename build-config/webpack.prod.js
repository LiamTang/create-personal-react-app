const webpack = require('webpack')
const {merge} = require('webpack-merge')
const webpackCommonConf = require('./webpack.common.js')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { distPath } = require('./path.js')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output:{
        filename: 'bundle.[hash:8].js',
        path: distPath
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ]
})