const express = require('express')
const router = express.Router()
const userController = require('../controller/User')
const passport = require('passport')

router.get("/",userController.getUser);
router.post("/register", userController.requsterUser);
router.post("/login", userController.loginUser);

module.exports = router