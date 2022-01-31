const express = require("express")
const router = express.Router()
const { register, login } = require("../controllers/auth")

// Create User 
router.post("/register", register)

// authorise User 
router.post("/login", login)

module.exports = router
