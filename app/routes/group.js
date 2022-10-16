const express = require('express');

const router = express.Router();

const GroupController = require('../controllers/GroupController');

const groupInst = new GroupController();

router.post('/', groupInst.create);
router.patch('/:groupId', groupInst.update);
router.get('/', groupInst.get);
router.delete('/:groupId', groupInst.delete);



module.exports = router;
