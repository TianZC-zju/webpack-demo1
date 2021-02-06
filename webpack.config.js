const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base.js")
module.exports = {
    ...base,
    mode: "development",
    module: {
        rules: [
            // ...base.module.rules,
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
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
        ],
    }
};