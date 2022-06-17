// build your server here and require it from index.js

const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (request, response, next) => {
    next({ status: 404, message: 'That URL was not found.' });
});

server.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        message: error.message || 'An error occurred within the recipes router.',
        stack: error.stack
    });
});

module.exports = server;