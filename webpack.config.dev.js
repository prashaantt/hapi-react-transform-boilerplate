const Path = require('path');
const Webpack = require('webpack');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './src/client'
    ],
    output: {
        path: Path.join(__dirname, 'build/dev'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel',
            include: [
                Path.resolve(__dirname, 'src')
            ],
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    }
};
