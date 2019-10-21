const express = require('express')
let router = express.Router()

// IMPORTS
const thread = require('../controller/createThread');
const findEmergencyThread = require('../controller/findEmergencyThreads');
const emerygencyThread = require('../controller/createEmergencyThread');
const findThreads = require('../controller/findThread');
// LOGIN ? SIGNUP
const login = require('../controller/login');
const register = require('../controller/register');


router.post("/register",register.register);
router.post("/login",login.login);

router.post("/create-thread", thread.createThread);
router.post("/emergeny-thread",emerygencyThread.emergenyThread);

router.post("/emergeny-thread", findEmergencyThread.findThreads);
router.post("/find-thread",findThreads.findThreads);

module.exports = router;