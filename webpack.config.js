const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base.js")
module.exports = {
    ...base,
    mode: "development",
    module: {
        rules: [
            // ...base.module.rules,
            //.css
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //.scss
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // `dart-sass` 是首选
                            implementation: require("dart-sass")
                        },
                    },
                ],
            },
            //.less
            {
                test: /\.less$/i,
                use: ["style-loader","css-loader","less-loader"],
            },
            //.styl
            {
                test: /\.styl$/,
                use: ["style-loader","css-loader","stylus-loader"],
            },
            //.png
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: ['file-loader',],
            }

        ],
    }
};