const Express = require('../Express')
const errorHandler = require('errorhandler')

module.exports = () => {
    Express.core.use(errorHandler())
}
