const express = require("express")
const router = express.Router({ mergeParams: true })
const { getAllTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController")
const { authenticateUser, authorizeRoles } = require("../middleware/authentication")
const { uploadTaskImage } = require("../controllers/uploadsController")

// Creating a stage within a project
router
  .route("/")
  .get(authenticateUser, getAllTasks)
  .post([authenticateUser, authorizeRoles("project manager")], createTask)
router
  .route("/:id")
  .get(authenticateUser, getTask)
  .delete([authenticateUser, authorizeRoles("project manager")], deleteTask)
  .patch([authenticateUser, authorizeRoles("project manager")], updateTask)
router.route("/upload").post(uploadTaskImage)

// This is a random comment

module.exports = router
