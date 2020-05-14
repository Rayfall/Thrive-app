const express = require('express');
const router = express.Router();
const withAuth = require('../middleware/middleware');

const authController = require('../controllers/auth-controller');

router.post('/', authController.createNewUser);
router.post('/authenticate', authController.authenticateUser);
router.get('/secret', withAuth, authController.testSecret);
router.get('/checkToken', withAuth, authController.tokenCheck);

module.exports = router;