const checkProjectName = (request, response, next) => {
    const { project_name } = request.body;
    if (!project_name) {
        next({ status: 400, message: 'Please provide a project name.' });
    } else {
        next();
    }
};

module.exports = { checkProjectName };