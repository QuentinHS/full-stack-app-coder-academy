const express = require("express")
const router = express.Router()
const { authenticateUser, authorizeRoles } = require('../middleware/authentication')
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require("../controllers/userController")


router.route("/users").get(authorizeRoles("trade provider"), getAllUsers)

router.route("/showMe").get(showCurrentUser)
router.route("/updateUser").patch(updateUser)
router.route("/updateUserPassword").patch( updateUserPassword)

router.route("/users/:id").get(getSingleUser)

module.exports = router
