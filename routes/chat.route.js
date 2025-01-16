const router = require('express').Router();
const chatCtrl = require('../controllers/chat.controller');

router.post('/chat', chatCtrl.chat);

module.exports = router;
