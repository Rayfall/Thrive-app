const Task = require('../models/task-model')
const taskData = require('./tasks.json')
const mongoose = require('./connection')

Task.deleteMany({}).then(() => {
    Task.collection.insertMany(taskData).then(tasks => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})