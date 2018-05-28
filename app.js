require('dotenv').config();

const Express = require('./server/Bootstrap/Express');
const argv = require('yargs').argv;
const path = require('path');
const { Nuxt, Builder } = require('nuxt');

const config = require(path.resolve(argv['configFile']));

const nuxt = new Nuxt(config);
const trigger = !(process.env.NODE_ENV === 'production') ? new Builder(nuxt).build() : Promise.resolve();

export const express = new Express();

trigger.then(() => {
    express.setViewFramework(nuxt.render);
    express.startServer();
});
trigger.catch((error) => {
    console.log(error);
    process.exit(1);
});