const express = require('express');
const chalk = require('chalk');

//const Kernel = require('./Kernel')
const Database = require('./Database');
const Routes = require('../routes');

const config = require('../config');

require('../library/Passport');

class Express {
    constructor() {
        Express.core = express();
        this.initialize();
    }

    initialize() {
        this.database();
        this.middlewares();
        this.routes();
    }

    database() {
        (new Database()).start();
    }

    middlewares() {
        config.middleware.middlewares.forEach(middleware => {
            require('./Middlewares/' + middleware)();
        });
    }

    routes() {
        Object.keys(Routes).map((route) => {
            Express.core.use('/' + route, Routes[route]);
        });
    }

    setViewFramework(framework) {
        Express.core.use(framework);
    }

    startServer() {
        const server = Express.core.listen(config.app.port, config.app.host, function () {
            console.log('%s App is running at http://localhost:%d in %s mode',
                chalk.green('✓'), server.address().port, process.env.NODE_ENV);
        });
    }
}

Express.core = null;

module.exports = Express;