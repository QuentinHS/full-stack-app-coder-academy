const express = require("express")
const router = express.Router()

project/:id/stages/:id/task/:id

router.route('/').post(createTask).get(getAllTasks)
router.route('/:task_id').get(getTask).delete(deleteTask).patch(updateTask)

module.exports = router