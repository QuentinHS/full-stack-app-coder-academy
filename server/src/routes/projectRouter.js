const express = require("express")
const router = express.Router()

project/:id/stages/:id/task/:id

// Dashboard 

router.route('/').post(createProject).get(getAllProjects)
router.route('/:project_id').get(getProject).delete(deleteProject).patch(updateProject)

module.exports = router