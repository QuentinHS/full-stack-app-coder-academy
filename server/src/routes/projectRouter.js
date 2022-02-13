const express = require("express")
const router = express.Router()
const { getAllProjects, createProject, getProject, deleteProject, updateProject } = require("../controllers/projectController")
const { authenticateUser, authorizeRoles } = require("../middleware/authentication")

// project routes
router
  .route("/")
  .post([authenticateUser, authorizeRoles("project manager")], createProject)
  .get(authenticateUser, getAllProjects)

router
  .route("/:id")
  .get(authenticateUser, getProject)
  .delete([authenticateUser, authorizeRoles("project manager")], deleteProject)
  .patch([authenticateUser, authorizeRoles("project manager")], updateProject)

module.exports = router
