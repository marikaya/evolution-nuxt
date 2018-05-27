const Sequelize = require('sequelize')
const path = require('path')
const config = require('../config')

class Database {
    constructor() {
        this.sequelize = null
    }

    start() {
        const dbcfg = config.database.mysql;
        this.sequelize = new Sequelize(dbcfg.database, dbcfg.username,
            dbcfg.password, dbcfg.options);

        this.load()
        /*this.sequelize.sync({force: true}).catch(err => {
            throw err
        })*/

        return true
    }

    load() {
        const normalizedPath = path.join(__dirname,'../Models');
        require("fs").readdirSync(normalizedPath).forEach((file) => {
            let model = this.sequelize.import(path.join('../Models', file))
            Database[model.name] = model
        });
        Object.keys(Database).forEach(modelName => {
            if (Database[modelName].associate) {
                Database[modelName].associate(Database);
            }
        })
    }

    static getModel(model){
        return Database[model]
    }
}

module.exports = Database