const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    },

    /* 配置webpack插件 */
    plugins: [
        /* 清除dist目录 */
        new CleanWebpackPlugin(),
        /* 自动生成HTML文件并且引入相关资源 */
        new HTMLWebpackPlugin({
            title: '这个是一个自定义的Title',
            template: './src/index.html'
        })
    ],

    /* 设置引用模块 */
    resolve: {
        extensions: ['.ts', '.js']
    }

}