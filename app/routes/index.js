const express = require('express');
require('express-async-errors');

const router = express.Router();
const errorhandler = require('../errorhandler/error');
const checkRole = require('../middleware/roleMiddleware');

const authRouter = require('./auth');
const userRouter = require('./user');
const groupRouter = require('./group');
const messageRouter = require('./message');

router.use('/auth', authRouter);
router.use('/user', checkRole, userRouter);
router.use('/group', groupRouter);
router.use('/message', messageRouter);

router.use(errorhandler);

module.exports = router;
