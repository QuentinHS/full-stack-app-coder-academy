const express = require("express")
const router = express.Router()
const {getAllProjects, createProject} = require("../controllers/projectController")


// project/:id/stages/:id/task/:id

// Dashboard and create new project 
router.route('/').post(createProject).get(getAllProjects)

// Viewing/Updating/deleting a project 
router.route('/:project_id').get(getProject).delete(deleteProject).patch(updateProject)

module.exports = router


