// build your `Resource` model here

const database = require('../../data/dbConfig');

const retrieveResources = async () => {
    const resources = await database('resources');
    
    return resources;
};

const addResource = async (resourceToAdd) => {
    const [id] = await database('resources').insert(resourceToAdd);

    const newResource = await database('resources').where('resource_id', id).first();

    return newResource;
};

module.exports = { retrieveResources, addResource };