const database = require('../../data/dbConfig');

const checkResourceName = async (request, response, next) => {
    const { resource_name } = request.body;
    const possibleExistingResource = await database('resources').where('resource_name', resource_name).first();
    if (possibleExistingResource || !possibleExistingResource === []) {
        next({ status: 400, message: 'That resource name is already taken. Please choose another name.' });
    } else {
        next();
    }
};

module.exports = { checkResourceName };