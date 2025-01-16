const router = require('express').Router();
const historyCtrl = require('../controllers/history.controller');

router.get('/history', historyCtrl.history);

module.exports = router;
