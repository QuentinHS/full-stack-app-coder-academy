const express = require("express")
const router = express.Router()

router.route('/').post(createTrade)
router.route('/:trade_id').delete(deleteTrade).patch(updateTrade)

module.exports = router