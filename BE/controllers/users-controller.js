const User = require('../models/user-model');
const Task = require('../models/task-model');

const getUserName = (req, res) => {
    User.find({_id: req.params.id}).then(user => {
        res.json(user.firstname);
    });
}

const updateUserById = (req, res) => {
    User.findByIdAndUpdate(req.params.id).then(user => {
        user.firstname.push(user._id);
        user.lastname.push(user._id);
    });
}

const deleteUser = (req, res) => {
    User.findOneAndDelete(req.params.id).then(user => {
        res.json(user);
    });
}

//Task routes for Users
const createTaskForUser = (req, res) => {
    const newTask = req.body;
    User.find({_id: req.params.id}).then(user => {
        Task.create(newTask).then(task => {
            task.title.push(user._id);
            task.isPriority.push(user._id);
            res.json(task);
        });
    });
}

module.exports = {
    getUserName,
    updateUserById,
    deleteUser,
    createTaskForUser
}