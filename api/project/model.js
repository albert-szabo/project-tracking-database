// build your `Project` model here

const database = require('../../data/dbConfig');

const retrieveProjects = async () => {
    const projects = await database('projects');
    return projects;
};

module.exports = { retrieveProjects };