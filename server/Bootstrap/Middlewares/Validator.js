const Express = require('../Express')
const validator = require('express-validator')

module.exports = () => {
    Express.core.use(validator())
}
