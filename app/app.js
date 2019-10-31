// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const init = (data) => {
    const app = express();

    // config start
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // config end

    require('./routers')
        .attachTo(app);

    return Promise.resolve(app);
};


module.exports = {
    init
};