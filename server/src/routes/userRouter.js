const express = require("express")
const router = express.Router()

// User Profile 
router.route('/:user_id').get(getUser).delete(deleteUser).patch(updateUser)

module.exports = router