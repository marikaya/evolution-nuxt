const Express = require('../Express')
const passport = require('passport')

module.exports = () => {
    Express.core.use(passport.initialize())
    Express.core.use(passport.session())
}
