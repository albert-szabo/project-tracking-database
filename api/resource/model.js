// build your `Resource` model here

const database = require('../../data/dbConfig');

const retrieveResources = async () => {
    const resources = await database('resources');
    return resources;
};

module.exports = { retrieveResources };