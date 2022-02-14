const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        rewardpicker: {
            import: './src/index.tsx',
            filename: 'rewardpicker.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build/static')
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        allowedHosts: ['.ngrok.io'],
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                router: () => 'http://localhost:8086',
                logLevel: 'debug'
            }
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
