const express = require("express")
const router = express.Router()

// project/:id/trades/:id

// Creating a trade provider inside a project
router.route('/').post(createTask).get(getAllTradeProviders)
router.route('/:tradeProvider_id').get(getTradeProvider).delete(deleteTradeProvider).patch(updateTradeProvider)

module.exports = router