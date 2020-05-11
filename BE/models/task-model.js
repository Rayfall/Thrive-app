const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const subSchema = new Schema ({
    subtask: String
})

const itemSchema = new Schema ({
    item: String,
    subtasks: [subSchema]
})

const taskSchema = new Schema ({
    title: String,
    //date-created
    //date-modified
    //is-priority
    items: [itemSchema]
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;