const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');

const userInst = new UserController();

router.post('/', userInst.create);
router.patch('/:userId', userInst.update);

module.exports = router;
