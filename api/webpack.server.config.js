const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = (env, argv) => {
    const SERVER_PATH = (argv.mode === 'production') ?
        './src/server/server.prod.js' :
        './src/server/server.dev.js'
    return ({
        devtool: 'source-map',
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            },
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }]
        },
        plugins: [
            new Dotenv()
        ]
    })
}