const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath} = require('./path.js')


module.exports = {
    entry: path.join(srcPath,'index.js'),
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(srcPath,'index.html')
        }),
    ],
}