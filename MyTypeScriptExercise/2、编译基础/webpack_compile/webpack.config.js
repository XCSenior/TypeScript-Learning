const path = require('path');

module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 输出到指定位置
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    // 指定webpack打包的loader
    module: {
        // 指定loader规则
        rules: [
            {
                // 指定规则
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 指定要排除的文件夹
                exclude: /node_modules/
            }
        ]
    }

}