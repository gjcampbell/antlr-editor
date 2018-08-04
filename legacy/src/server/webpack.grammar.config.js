const path = require('path');
const settings = require('./env.js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './client/grammar-index.html'),
    filename: 'grammar-index.html'
}); 

module.exports = grammarName => {
    return {
        entry: {
            app: path.resolve(__dirname, settings.outputPath, `./${grammarName}/entry.js`)
        },
        output: {
            path: path.resolve(__dirname, settings.outputPath, `./${grammarName}`),
            filename: `grammar-build.js?grammar=${grammarName}`
        },
        module: {
            noParse: /node_modules\/antlr\/|node_modules\/react\/|node_modules\/d3\//,
            loaders: [{
                test: /\.js?$/, 
                include:  __dirname,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, './client/grammar'),
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }]
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
    };
}