var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path');
function resolve (dir) {
    return path.join(__dirname,  dir)
}


module.exports = {
    mode: 'development',
    devtool: "cheap-eval-source-map",
    entry:
    {
        "elementuiplugin":__dirname+'/src/js/elementuiplugin.js',
        "index":__dirname+'/src/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' }
            ]
        }
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
                    'vue$': 'vue/dist/vue.esm.js',
                    // src: resolve('src'),
                    // static: resolve('static'),
                    '@': resolve('src')
                }
            },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // other vue-loader options go here
                    transformToRequire: {
                        "audio": "src",
                        // "object": "data"
                    }
                }
            },
            {
                test: /\.(swf|mp3)$/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,// 图片大小 > limit 使用file-loader, 反之使用url-loader
                        // outputPath: 'assets/images'// 指定打包后的图片位置
                        // limit: 10000,
                        name: 'static/[hash:8].[name].[ext]'
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|eot|woff|woff2|ttf)$/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,// 图片大小 > limit 使用file-loader, 反之使用url-loader
                        outputPath: 'assets/images'// 指定打包后的图片位置
                    }
                }
            },
            // {
            //     test: /\.(svg|png|jpg|jpeg|gif|eot|woff|woff2|ttf)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 outputPath: 'assets/images',
            //             },
            //         },
            //     ],
            // },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        // options here
                        options: {
                            remUnit: 55,
                            remPrecision: 10
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]

            }
        ]
    },
    plugins:[
                new HtmlWebpackPlugin({
                    filename: __dirname+'/dist/index.html',//目标文件
                    template: __dirname+'/src/html/index.html',//模板文件
                    inject:'body',
                    hash:true,
                    chunks:["index","elementuiplugin"]
                }),
                // new ProgressBarPlugin(),
                new VueLoaderPlugin()
            ],
};