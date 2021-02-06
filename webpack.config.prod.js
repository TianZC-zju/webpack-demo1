const base = require("./webpack.config.base.js")
module.exports = {
    ...base,
    mode: "production",
    module: {
        rules: [
            // ...base.module.rules,
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // `dart-sass` 是首选
                            implementation: require("dart-sass"),
                        },
                    },
                ],
            },
        ],
    }
};