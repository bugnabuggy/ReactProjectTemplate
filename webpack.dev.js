const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        inline: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
    
});