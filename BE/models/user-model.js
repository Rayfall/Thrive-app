const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: String,
    lastname: String,
    tasks: [{
        ref: "Task",
        type: mongoose.Schema.Types.ObjectId
    }]
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;