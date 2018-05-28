module.exports = {
    /*
     * Put any middleware you want in order to load with express
     * Middlewares must be put by in order
     * Middlewares needs class to initiate them in Bootstrap/Middlewares folder with exact same name.
     */
    middlewares : [
        'Logger', 'BodyParser', 'Cors', 'Helmet', 'Session', 'Passport', 'Validator', 'ErrorHandler'
    ]
};