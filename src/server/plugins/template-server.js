'use strict';

exports.register = (server, options, next) => {

    const template = options.template;
    const context = options.params;

    server.ext('onPreResponse', (request, reply) => {
        
        return reply.view(template, context);
    });

    next();
};


exports.register.attributes = {
    name: 'templateServer',
    dependencies: ['vision']
};
