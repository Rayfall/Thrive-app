const Task = require('../models/task-model')
const data = require('../db/tasks.json')

const getAll = (req, res) => {
    Task.find({}).then(tasks => {
        res.json(tasks);
    });
}

const getByTitle = (req, res) => {
    Task.findOne({title: req.params.title}, req.body).then(task => {
        res.json(task);
    });
}

const createTask = (req, res) => {
    const newTask = req.body;
   Task.create(newTask).then(task => {
       res.json(task);
   });
}

const updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id).then(task => {
        task.item.push(task._id)
    });
}

const deleteById = (req, res) => {
    Task.findOneAndDelete(req.params.id).then(task => {
        res.json(task);
    });
}

module.exports = {
    getAll,
    getByTitle,
    createTask,
    updateTask,
    deleteById
}