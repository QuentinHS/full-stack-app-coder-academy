const express = require("express")
const router = express.Router({mergeParams: true})
const { getAllStages, createStage, getStage, deleteStage, updateStage } = require("../controllers/stageController")

// Creating a stage within a project 
router.route('/').post(createStage).get(getAllStages)
router.route('/:id').get(getStage).delete(deleteStage).patch(updateStage)

// This is a random comment

module.exports = router

 