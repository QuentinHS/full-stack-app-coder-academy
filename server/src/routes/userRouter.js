const express = require("express")
const router = express.Router()
const { authenticateUser, authorizeRoles } = require('../middleware/authentication')
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require("../controllers/userController")


router.route("/users").get(authenticateUser, authorizeRoles("trade provider"), getAllUsers)

router.route("/showMe").get(authenticateUser, showCurrentUser)
router.route("/updateUser").post(updateUser)
router.route("/users/updateUserPassword").patch(authenticateUser, updateUserPassword)

router.route("/users/:id").get(authenticateUser, getSingleUser)


module.exports = router
