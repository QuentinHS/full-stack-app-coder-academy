const express = require("express")
const router = express.Router()
const { getAllProjects, createProject, getProject, deleteProject, updateProject } = require("../controllers/projectController")

router.route("/").post(createProject).get(getAllProjects)

router.route("/:id").get(getProject).delete(deleteProject).patch(updateProject)

module.exports = router
