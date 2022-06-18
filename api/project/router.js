// build your `/api/projects` router here

const router = require('express').Router();

const Projects = require('./model');

const { checkProjectName } = require('./middleware');

router.get('/', async (request, response, next) => {
    try {
        const projects = await Projects.retrieveProjects();
        response.json(projects);
    } catch (error) {
        next(error);
    }
});

router.post('/', checkProjectName, async (request, response, next) => {
    try {
        const projectToAdd = request.body;
        const newProject = await Projects.addProject(projectToAdd);
        response.status(201).json(newProject);
    } catch (error) {
        next(error);
    }
});

module.exports = router;