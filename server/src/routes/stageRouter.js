const express = require("express")
const router = express.Router()

project/:id/stages/:id/task/:id

router.route('/').post(createStage).get(getAllStage)
router.route('/:stage_id').get(getStage).delete(deleteStage).patch(updateStage)

module.exports = router