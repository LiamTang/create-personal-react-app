const webpack = require('webpack')
const {merge} = require('webpack-merge')
const webpackCommonConf = require('./webpack.common.js')
const { distPath } = require('./path.js')

module.exports = merge(webpackCommonConf, {
    mode:'development',
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use:'file-loader'
            },
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        contentBase: distPath,
    }
})