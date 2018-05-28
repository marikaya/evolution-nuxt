const Express = require('../Express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const config = require('../../config');

module.exports = () => {
    Express.core.use(session(Object.assign({},config.session.session, {
        store: new RedisStore(),
        secret: config.app.token_secret
    })));
};
