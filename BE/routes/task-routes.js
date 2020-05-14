const express = require('express')
const router = express.Router()

const taskController = require('../controllers/tasks-controller');

router.get('/', taskController.getAllTasks);
router.get('/task/:title', taskController.getTaskByTitle);
router.get('/task/:isPriority', taskController.getTaskByPriority);

router.post('/task/', taskController.createTask);

router.put('/update/:id', taskController.updateTaskById);

router.delete('/delete/:id', taskController.deleteTaskById);

module.exports = router;