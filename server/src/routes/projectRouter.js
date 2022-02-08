const express = require("express")
const router = express.Router()
const { getAllProjects, createProject, getProject, deleteProject, updateProject } = require("../controllers/projectController")
const { authenticateUser, authorizeRoles } = require("../middleware/authentication")

router.route("/").post(authenticateUser, createProject).get(authenticateUser, getAllProjects)

router.route("/:id").get(getProject).delete(deleteProject).patch(updateProject)

module.exports = router
