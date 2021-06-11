const { Router } = require('express');
const router = new Router();
const controller = require('./controller');

router.post('/login', controller.login);

module.exports = router;