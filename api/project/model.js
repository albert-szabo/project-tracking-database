// build your `Project` model here

const database = require('../../data/dbConfig');

const retrieveProjects = async () => {
    const projects = await database('projects');

    const modifiedProjects = projects.map((project) => ({
        ...project,
        project_completed: project.project_completed ? true : false
    }));

    return modifiedProjects;
};

module.exports = { retrieveProjects };