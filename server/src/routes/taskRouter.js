const express = require("express")
const router = express.Router({ mergeParams: true })
const { getAllTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController")

// Creating a stage within a project
router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)

// This is a random comment

module.exports = router
