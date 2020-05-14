const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const subSchema = new Schema ({
    subtask: String
})

const itemSchema = new Schema ({
    item: String,
    isPriority: Boolean,
    subtasks: [subSchema]
})

const taskSchema = new Schema ({
    title: String,
    isPriority: Boolean,
    items: [itemSchema]
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;