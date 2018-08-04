const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './app/index.html'),
    filename: 'index.html'
}); 

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'entry.js')
    },
    output: {
        path: path.resolve(__dirname, '../..', './wwwroot'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, 
            include:  __dirname,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
            }]
        }, {
            test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
            loader: 'url-loader'
        }]
    },
    node: {
        module: 'empty', 
        net: 'empty', 
        fs: 'empty'
    },
    plugins: [
        htmlPlugin
    ]
}