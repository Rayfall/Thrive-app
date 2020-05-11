const express = require('express')
const router = express.Router()

const taskController = require('../controllers/tasks-controller');

router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);
router.post('/create/', taskController.createTask);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteById);

module.exports = router;