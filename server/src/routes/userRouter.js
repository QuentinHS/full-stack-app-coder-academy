const express = require("express")
const router = express.Router()
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require("../controllers/userController")


router.route("/users").get(authenticateUser, authorizePermissions, getAllUsers)

router.route("/showMe").get(showCurrentUser)
router.route("/updateUser").post(updateUser)
router.route("/updateUserPassword").post(updateUserPassword)

router.route("/users/:id").get(authenticateUser, getSingleUser)


module.exports = router
