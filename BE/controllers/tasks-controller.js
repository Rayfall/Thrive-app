const Task = require('../models/task-model');


const getAllTasks = (req, res) => {
    console.log("In all tasks...")
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
    console.log( req.params.id);
    Task.updateOne({_id: req.params.id}).then(task => {
        task.title.push(task._id)
        task.isPriority.push(task._id)
        task.items.push(task._id)
    }).catch(err => {
        res.json(err)
    });
}

const deleteTaskById = (req, res) => {
    console.log("In the delete...");
    Task.remove({_id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
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