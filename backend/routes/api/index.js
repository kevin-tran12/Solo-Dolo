const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventRouter = require('./event.js')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/events',eventRouter)
module.exports = router;