const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller');

router.post('/', authController.createNewUser);
router.post('/authenticate', authController.authenticateUser);

module.exports = router;