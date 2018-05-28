const express = require('express');
const router = express.Router();

const UserController = require('../controller/Storefront/AuthController');

router.get('/user/logout', UserController.logout);
router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);


module.exports = router;