'use strict';

const Handlebars = require('handlebars');
const Hapi = require('hapi');
const HapiReduxRouter = require('hapi-redux-router');
const Inert = require('inert');
const Redux = require('redux');
const StaticFileServer = require('./plugins/file-server');
const Vision = require('vision');


const Routes = require('../routes').default;
const counterReducer = require('../screens/Counter/reducer').default;
const bootstrapAction = require('../screens/Counter/actions').initCounter;


const server = new Hapi.Server();
server.connection({
    port: 8080
});


const reducer = Redux.combineReducers({ counter: counterReducer });
const store = Redux.createStore(reducer);


const plugins = [
    {
        register: Vision
    },
    {
        register: Inert
    },
    {
        register: StaticFileServer
    },
    {
        register: HapiReduxRouter,
        options: {
            store,
            bootstrapAction,
            routes: Routes,
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

    console.log('Production server running at', server.info.uri);
});
