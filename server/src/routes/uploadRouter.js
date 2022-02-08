const express = require("express")
const router = express.Router()
const {uploadTaskImage } = require("../controllers/uploadsController")


router.route("/uploads").post(uploadTaskImage)


module.exports = router
