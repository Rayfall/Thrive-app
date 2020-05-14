const User = require('../models/user-model');
const Task = require('../models/task-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');

const getAllUsers = (req, res) => {
    User.find({}).then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err)
    })
}

const getUserInfo = (req, res) => {
    User.find({_id: req.params.id}, req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err)
    });
}

const getUserName = (req, res) => {
    User.find({_id: req.params.id}).then(user => {
        res.json(user.firstname);
    }).catch(err => {
        res.json(err)
    });
}

const createNewUser = async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { firstname, lastname, email, password} = req.body;
   
   try { let user = await User.findOne({email});
       if(user){
         return res.status(400).json({msg: 'User already exists'});
       }
       user = new User({
           firstname,
           lastname,
           email,
           password
       });
       const salt = await bcrypt.genSalt(10);
       user.password = await bcrypt.hash(password, salt)
       await user.save()
       const payload ={
           user: {
               id:user.id
           }
       }
       jwt.sign(payload, config.get('jwtSecret'),{ 
           expiresIn: 360000
       },(err,token)=>{
          if(err) throw err;
          res.json({token}); 
       })

   } catch (error) {
       console.error(error.message);
       res.status(500).send('Server Error')
   }
};

const updateUserById = (req, res) => {
    User.updateOne({ _id: req.params.id }).then(user => {
        user.email.push(user._id);
        user.password.push(user._id);
        user.firstname.push(user._id);
        user.lastname.push(user._id);
    }).catch(err => {
        res.json(err)
    });
}

const deleteUser = (req, res) => {
    User.remove({ _id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}

const authenticateUser = async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const { email, password} = req.body;
    
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'Invalid Credentials'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg: 'Invalid Credentials' });
        }
        const payload ={
            user: {
                id:user.id
            }
        }
        jwt.sign(payload, 
            config.get('jwtSecret'),
            { 
            expiresIn: 360000
        },
        (err,token)=>{
           if(err) throw err;
           res.json({token}); 
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const userAuthentication = async(req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

//Task routes for Users
const createTaskForUser = (req, res) => {
    const newTask = req.body;
    User.findOneAndUpdate({id: req.params.id}).then(user => {
        Promise.all([          
            Task.create(newTask).then(task => {
                user.tasks.push(task);
            })
        ]).then(() => {
            user.save()
        });
    });
}

const getUserTasks = (req, res) => {
    User.findOne({id: req.params.id}).then(user => {
        res.json(user.tasks);
    });
}

module.exports = {
    getUserName,
    updateUserById,
    deleteUser,
    createTaskForUser,
    getUserInfo,
    getAllUsers,
    createNewUser,
    authenticateUser,
    userAuthentication,
    getUserTasks
}