'use strict';

const Handlebars = require('handlebars');
const Hapi = require('hapi');
const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');
const StaticTemplateServer = require('./plugins/template-server');
const Vision = require('vision');


const WebpackConfig = require('../../webpack.config.dev.js');


const server = new Hapi.Server();
server.connection({
    port: 3000
});


const plugins = [
    Vision,
    {
        register: HapiWebpackDevMiddleware,
        options: {
            config: WebpackConfig,
            options: {
                noInfo: true,
                publicPath: WebpackConfig.output.publicPath
            }
        }
    },
    HapiWebpackHotMiddleware,
    {
        register: StaticTemplateServer,
        options: {
            template: 'index',
            params: {
                env: process.env.NODE_ENV
            }
        }
    }
];


server.register(plugins, (err) => {

    if (err){
        console.error(err);
    };
});


server.views({
    engines: { hbs: Handlebars }
});


server.start((err) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Development server running at', server.info.uri);
});
