const Path = require('path');
const Webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/client'
    ],
    output: {
        path: Path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                'BROWSER': true
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel',
            include: [
                Path.resolve(__dirname, 'src')
            ],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
