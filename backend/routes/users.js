const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);

module.exports = router;