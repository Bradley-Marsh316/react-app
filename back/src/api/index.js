const { Router } = require('express');
const auth = require('./auth');

const router = new Router();

router.use('/api/auth', auth);

module.exports = router;