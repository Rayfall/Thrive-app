const express = require('express')
const router = express.Router()

const userController = require('../controllers/users-controller');

router.get('/user', userController.getUserName);

router.put('/user/:firstname/:lastname', userController.updateUserById);

router.delete('/delete/:id', userController.deleteUser);

router.post('/task/', userController.createTaskForUser);


module.exports = router;