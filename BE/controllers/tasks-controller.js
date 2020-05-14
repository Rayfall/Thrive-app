const Task = require('../models/task-model');


const getAllTasks = (req, res) => {
    Task.find({}).then(tasks => {
        res.json(tasks);
    });
}

const getTaskByTitle = (req, res) => {
    Task.findOne({title: req.params.title}, req.body).then(task => {
        res.json(task);
    });
}

const getTaskByPriority = (req, res) => {
    Task.find({isPriority: req.params.isPriority}, req.body).then(task => {
        res.json(task);
    });
}

const createTask = (req, res) => {
    const newTask = req.body;
    Task.create(newTask).then(task => {
        res.json(task);
    });
}

const updateTaskById = (req, res) => {
    Task.findByIdAndUpdate(req.params.id).then(task => {
        task.title.push(task._id)
        task.isPriority.push(task._id)
        task.items.push(task._id)
    });
}

const deleteTaskById = (req, res) => {
    Task.findOneAndDelete(req.params.id).then(task => {
        res.json(task);
    });
}

module.exports = {
    getAllTasks,
    getTaskByTitle,
    getTaskByPriority,
    createTask,
    updateTaskById,
    deleteTaskById
}