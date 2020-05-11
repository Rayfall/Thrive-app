const express = require('express')
const router = express.Router()

const taskController = require('../controllers/tasks-controller');

router.get('/', taskController.getAll);
router.get('/task/:title', taskController.getByTitle);
router.post('/create/:task', taskController.createTask);
router.put('/update/:task', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteById);

module.exports = router;