const Express = require('../Express');
const bodyParser = require('body-parser');

module.exports = () => {
    Express.core.use(bodyParser.urlencoded({extended: true}));
    Express.core.use(bodyParser.json());
};
