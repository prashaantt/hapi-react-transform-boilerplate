'use strict';

exports.register = (server, options, next) => {

    server.route({
        path: '/static/{filename}',
        method: 'GET',
        handler: {
            directory: {
                path: './public'
            }
        }
    });

    next();
};


exports.register.attributes = {
    name: 'fileServer',
    dependencies: ['inert']
};
