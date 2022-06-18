// build your `Task` model here

const database = require('../../data/dbConfig');

const retrieveTasks = async () => {
    const tasks = await database('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description');

    const modifiedTasks = tasks.map((task) => ({
        ...task,
        task_completed: task.task_completed ? true : false
    }));

    return modifiedTasks;
};

module.exports = { retrieveTasks };
