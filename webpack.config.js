const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
        compress: true,
      },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|svg|jpg|jpeg|png)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'Orchard Test',
        }),
    ]
}