// build your `/api/projects` router here

const router = require('express').Router();

const Projects = require('./model');

router.get('/', async (request, response, next) => {
    try {
        const projects = await Projects.retrieveProjects();
        response.json(projects);
    } catch (error) {
        next(error);
    }
})

module.exports = router;