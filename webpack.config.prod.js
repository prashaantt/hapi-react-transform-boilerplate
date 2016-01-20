const Path = require('path');
const Webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './build/client'
    ],
    output: {
        path: Path.join(__dirname, 'build/prod'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new Webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};
