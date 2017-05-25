const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const rootPath = path.resolve(__dirname, '..');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

const postCSSLoader = {
   loader: "postcss-loader",
   options: {
        plugins: function() {
            return [
                require('autoprefixer')
            ];
       }
    }
};

module.exports = {
    context: rootPath,

    entry: {
        index: [
            'webpack-dev-server/client?http://127.0.0.1:3000/',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.resolve(rootPath, 'src/entries/index')
        ],
        detail: [
            'webpack-dev-server/client?http://127.0.0.1:3000/',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.resolve(rootPath, 'src/entries/detail')
        ],
        common: [
            'babel-polyfill'
        ]
    },

    output: {
        path: path.resolve(rootPath, 'dist'),
        publicPath: '../',
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [
                    path.resolve(rootPath, 'src'),
                ],
                loader: 'eslint-loader',
            },
            {
                test: /\.js?$/,
                exclude: [
                    path.resolve(rootPath, 'node_modules')
                ],
                loader: ['babel-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name]-[hash].[ext]',
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    postCSSLoader
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    postCSSLoader,
                    'less-loader'
                ]
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },
            {
                test: /react-icons\/(.)*(.js)$/,
                loader: 'babel-loader',
                include: path.resolve(rootPath, 'node_modules/react-icons')
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: 2,
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',                                        
            template: rootPath + '/src/htmls/index.html',
            chunks: ['common', 'index']
        }),

        new HtmlWebpackPlugin({
            filename: 'detail.html',                                        
            template: rootPath + '/src/htmls/detail.html',
            chunks: ['common', 'detail']
        }),

        new ProgressBarPlugin({
            format: '  build [:bar] ' + ':percent' + ' (:elapsed seconds)',
            clear: false
        })
    ],

    resolve: {
        extensions: ['*', '.web.js', '.js', '.json', '.less', '.css', '.html'],
        modules: ['src', 'node_modules', path.resolve(rootPath, 'node_modules')],
        alias: { }
    }
};

