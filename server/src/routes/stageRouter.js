const express = require("express")
const router = express.Router({mergeParams: true})
const { getAllStages, createStage, getStage, deleteStage, updateStage } = require("../controllers/stageController")
const { authenticateUser, authorizeRoles } = require("../middleware/authentication")

// Stage routes
router
  .route("/")
  .post([authenticateUser, authorizeRoles("project manager")], createStage)
  .get(authenticateUser, getAllStages)
router
  .route("/:id")
  .get(authenticateUser, getStage)
  .delete([authenticateUser, authorizeRoles("project manager")], deleteStage)
  .patch([authenticateUser, authorizeRoles("project manager")], updateStage)

module.exports = router

 