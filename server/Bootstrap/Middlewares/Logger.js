const Express = require('../Express');
const morgan = require('morgan');

module.exports = () => {
    Express.core.use(morgan('dev'));
};
