const express = require('express')
const router = express.Router()

const groupController = require('../controllers/groups-controller');

router.get('/', groupController.getAllGroups);
router.get('/group/:id', groupController.getGroupById);

router.post('/create/', groupController.createNewGroup);

router.put('/name/:name', groupController.changeGroupName);

router.delete('/delete/', groupController.deleteGroup);

//-------For Tasks------------
router.post('/task/', groupController.createTaskForGroup);


//-------For Users------------
router.get('/users/', groupController.getUsersInGroup);
router.put('/addUsers/', groupController.addUsersToGroup);
router.put('/removeUsers/', groupController.removeUsersFromGroup);

module.exports = router;