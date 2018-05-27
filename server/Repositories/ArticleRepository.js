import {Article} from '../bootstrap/Database'

const Op = require('sequelize').Op

module.exports = {
    getMastHeaderCollection: async (limit) => {
        return await Article.find({
            include: ['Author'],
            order: [['createdAt', 'DESC']],
            limit: limit
        })
    },
}
