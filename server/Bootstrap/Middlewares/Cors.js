const Express = require('../Express')
const cors = require('cors')

module.exports = () => {
    Express.core.use(cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST'],
        credentials: true,
    }))
}
