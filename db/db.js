// jshint esversion:6

const { MongoClient } = require('mongodb');

const init = (connectionString) => {
    return MongoClient.connect(connectionString, { useUnifiedTopology: true});
};

module.exports = { init };