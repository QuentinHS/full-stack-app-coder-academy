const express = require("express")
const router = express.Router()
const { getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword } = require("../controllers/userController")


router.route("/users").get(getAllUsers)
router.route("/showMe").get(showCurrentUser)
router.route("/updateUser").post(updateUser)
router.route("/updateUserPassword").post(updateUserPassword)

router.route("/users/:id").get(getSingleUser)


module.exports = router
