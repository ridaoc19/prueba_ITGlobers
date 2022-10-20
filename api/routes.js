const express = require('express');
const router = express.Router();

// RUTAS
router.use('/registration', require('./src/modules/registration/controller.js'));

module.exports = router;


