const express = require("express")
const router = express.Router()
const { authenticateUser, authorizeRoles } = require('../middleware/authentication')
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require("../controllers/userController")

// user routes - some require admin authentication
router.route("/users").get(authenticateUser, authorizeRoles("admin"), getAllUsers)

router.route("/showMe").get(authenticateUser, showCurrentUser)
router.route("/updateUser").patch(authenticateUser, updateUser)
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword)

router.route("/users/:id").get(authenticateUser, getSingleUser)

module.exports = router
