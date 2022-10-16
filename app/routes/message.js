const express = require('express');

const router = express.Router();

const MessageController = require('../controllers/MessageController');

const messageInst = new MessageController();

router.post('/:groupId', messageInst.create);
router.patch('/:messageId', messageInst.like);

module.exports = router;
