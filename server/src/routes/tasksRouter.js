const express = require("express")
const router = express.Router({ mergeParams: true })
const { getAllTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController")

// Creating a stage within a project
router.route("/").post(createTask).get(getAllTasks)
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)

// This is a random comment

module.exports = router
