module.exports = {
    mysql: {
        username: process.env.DB_USERNAME || 'ahs',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'database',
        options: {
            host: process.env.DB_HOST || '127.0.0.1',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            operatorsAliases: false
        },
    }
};