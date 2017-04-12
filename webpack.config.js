var path = require('path')
var ROOT = path.resolve(__dirname)
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')


var config = {
    entry: './src/main.js',
    output: {
        publicPath: "/cdn/",
        path: path.join(__dirname, 'dist'),
        filename: '[name].js?[hash]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackHarddiskPlugin(),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: ROOT + '/index.html',
            template: ROOT + '/tpl/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'Zepto'
        })
    ],
    externals: {
        Zepto: 'window.Zepto'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: 'cheap-module-eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

module.exports = config;