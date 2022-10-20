const express = require('express');
const router = express.Router();
const { postRegistration, getRegistration } = require("./services.js");

router.post("/", postRegistration )
router.get("/:ip", getRegistration )

module.exports = router;


