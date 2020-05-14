const express = require('express')
const router = express.Router()
const withAuth = require('../middleware/middleware');
const { check } = require('express-validator');

const userController = require('../controllers/users-controller');

router.post('/user/',[    
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6 })],
    check('firstname','name is required').not().isEmpty(),
    check('lastname','name is required').not().isEmpty(),
    userController.createNewUser);

router.get('/', userController.getAllUsers);
router.get('/user/:id', userController.getUserInfo);
router.get('/user/name', userController.getUserName);

router.put('/user/:firstname/:lastname', userController.updateUserById);

router.delete('/delete/:id', userController.deleteUser);


//-----For Tasks-------
router.post('/task/', userController.createTaskForUser);
//router.put('/task/send/:id', userController.sendTaskToUser);
//router.put('/task/remove/:id', userController.deleteTaskFromUser);

//-----For Authentication---------
router.get('/auth/', withAuth, userController.userAuthentication);

router.post('/authenticate/',[
    check('email','please include a valid email').isEmail(),
    check('password','password is required').exists()],
    userController.authenticateUser);

module.exports = router;