const express = require("express")
const router = express.Router()

//project/:id/stages/:id/task/:id

// Creating a stage within a project 
router.route('/').post(createStage).get(getAllStage)
router.route('/:stage_id').get(getStage).delete(deleteStage).patch(updateStage)

// This is a random comment

module.exports = router