// build your `/api/resources` router here

const router = require('express').Router();

const Resources = require('./model');

const { checkResourceName } = require('./middleware');

router.get('/', async (request, response, next) => {
    try {
        const resources = await Resources.retrieveResources();
        response.json(resources);
    } catch (error) {
        next(error);
    }
});

router.post('/', checkResourceName, async (request, response, next) => {
    try {
        const resourceToAdd = request.body;
        const newResource = await Resources.addResource(resourceToAdd);
        response.status(201).json(newResource);
    } catch (error) {
        next(error);
    }
});

module.exports = router;