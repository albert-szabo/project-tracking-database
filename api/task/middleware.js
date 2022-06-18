const database = require('../../data/dbConfig');

const validateNewTaskPayload = async (request, response, next) => {
    const { task_description, project_id } = request.body;
    const existingProject = database('projects').where('project_id', project_id).first();
    if (!task_description || !project_id) {
        next({ status: 400, message: 'Please provide a task description and a project ID.' });
    } else if (!existingProject || existingProject === []) {
        next({ status: 400, message: 'Please provide the valid project ID of an existing project.' });
    } else {
        next();
    }
};

module.exports = { validateNewTaskPayload };