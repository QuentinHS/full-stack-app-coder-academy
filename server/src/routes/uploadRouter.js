const express = require("express")
const router = express.Router()
const { uploadTaskImage } = require("../controllers/uploadsController")

// upload routes for task images
router.route("/uploads").post(uploadTaskImage)


module.exports = router
