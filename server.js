// jshint esversion:6

// MongoDB
// const db = require('./db');
// const data= require('./data').init(db);
// const app=require('./app').init(data);


// app.listen(3001,()=> console.log('perfect'));
const async = () => {
    return Promise.resolve();
};

const config = require('./config');

async()
    .then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(config.port, () => console.log(`Server started perfectly on ${config.port}...`));
    });