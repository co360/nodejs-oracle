const express = require('express');
const router = express.Router();
const controller = require('../controller/pessoa-controller');



router.get('/', controller.get);

module.exports = router;