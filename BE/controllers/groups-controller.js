const User = require('../models/user-model');
const Task = require('../models/task-model');
const Group = require('../models/groups-model');

const getAllGroups = (req, res) => {
    Group.find({}).then(groups => {
        res.json(groups);
    }).catch(err => {
        res.json(err)
    })
}

const getGroupById = (req, res) => {
    Group.find({_id: req.params.id}, req.body).then(group => {
        res.json(group);
    }).catch(err => {
        res.json(err)
    });
}

const createNewGroup = (req, res) => {
    Group.create(req.body).then(group => {
        Promise.all([   
            User.findOne({id: req.params.id}).then(user => {
                group.owners.push(user);
            })
        ]).then(() => {
            group.save()
        });
    });
}

const changeGroupName = (req, res) => {    
    Group.updateOne({ _id: req.params.id }).then(group => {
        group.name.push(group._id);
    }).catch(err => {
        res.json(err)
    });    
}

const deleteGroup = (req, res) => {
    Group.remove({ _id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}

const createTaskForGroup = (req, res) => {
    const newTask = req.body;
    Group.findOneAndUpdate({id: req.params.id}).then(group => {
        Promise.all([          
            Task.create(newTask).then(task => {
                group.tasks.push(task);
            })
        ]).then(() => {
            group.save()
        });
    });
}

const getTasksForGroup = (req, res) => {
    Group.findOne({id: req.params.id}).then(group => {
        res.json(group.tasks);
    });
}

const getUsersInGroup = (req, res) => {
    Group.findOne({id: req.params.id}).then(group => {
        res.json(group.users);
    }).catch(err => {
        res.json(err)
    })
}

const addUsersToGroup = (req, res) => {
    Group.findOne({id: req.params.id}).then(group => {
        Promise.all([   
            User.findOne({id: req.params.id}).then(user => {
                group.users.push(user);
            })
        ]).then(() => {
            group.save()
        });
    })
}

const removeUsersFromGroup = (req, res) => {
    Group.findOne({id: req.params.id}).then(group => {
        Promise.all([   
            User.findOne({id: req.params.id}).then(user => {
                group.users.remove(user);
            })
        ]).then(() => {
            group.save()
        });
    })
}



module.exports = {
    getAllGroups,
    getGroupById,
    createNewGroup,
    changeGroupName,
    deleteGroup,
    createTaskForGroup,
    getTasksForGroup,
    getUsersInGroup,
    addUsersToGroup,
    removeUsersFromGroup
}