// build your `/api/tasks` router here

const router = require('express').Router();

const Tasks = require('./model');

const { validateNewTaskPayload } = require('./middleware');

router.get('/', async (request, response, next) => {
    try {
        const tasks = await Tasks.retrieveTasks();
        response.json(tasks);
    } catch (error) {
        next(error);
    }
});

module.exports = router;