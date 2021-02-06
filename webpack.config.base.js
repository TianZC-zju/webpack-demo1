const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack App",
        template: "src/index.html"
    }), new MiniCssExtractPlugin()],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [],
    }
};