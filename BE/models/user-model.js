const mongoose = require('../db/connection');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const saltRounds = 10;

const userSchema = new Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    tasks: [{
        ref: "Task",
        type: mongoose.Schema.Types.ObjectId
    }]
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;