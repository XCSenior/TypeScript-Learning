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
        filename: "bundle.js",
        /* 打包兼容环境 */
        // 告诉webpack,为了兼容老版本浏览器,不要给自执行函数加箭头函数
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包的loader
    module: {
        // 指定loader规则
        rules: [
            {
                // 指定规则
                test: /\.ts$/,
                // 要使用的loader
                use: [ // 从后往前执行
                    /* 配置babel-loader */
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        /* 指定要兼容的浏览器版本 */
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        /* 指定corejs版本 */
                                        "corejs": "3",
                                        /* 使用corejs方法: usage按需加载 */
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
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

    /* 设置引用模块,使用了模块化的ts,需要设置此项 */
    resolve: {
        extensions: ['.ts', '.js']
    }

}