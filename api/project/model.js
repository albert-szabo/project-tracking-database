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

const addProject = async (projectToAdd) => {
    const [id] = await database('projects').insert(projectToAdd);

    const newProject = await database('projects').where('project_id', id).first();

    const modifiedNewProject = {
        ...newProject,
        project_completed: newProject.project_completed ? true : false
    };

    return modifiedNewProject;
};

module.exports = { retrieveProjects, addProject };