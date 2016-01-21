const Fs = require('fs');
const Path = require('path');
const Webpack = require('webpack');


const nodeModules = {};
Fs.readdirSync('node_modules').forEach((module) => {

    if (module !== '.bin') {
        nodeModules[module] = 'commonjs ' + module;
    }
});


module.exports = {
    entry: [
        './src/server/prodServer'
    ],
    target: 'node',
    externals: nodeModules,
    output: {
        path: Path.join(__dirname, 'build'),
        filename: 'serverBundle.js'
    },
    plugins: [
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
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
