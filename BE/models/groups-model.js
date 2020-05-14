const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const groupSchema = new Schema ({
    owners: [{
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }],
    name: String,
    users: [{
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }],
    tasks: [{
        ref: "Task",
        type: mongoose.Schema.Types.ObjectId
    }]
});

const GroupModel = mongoose.model("Group", groupSchema);

module.exports = GroupModel;