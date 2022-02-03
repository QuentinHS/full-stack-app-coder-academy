const express = require("express")
const router = express.Router({ mergeParams: true })
const { getAllTrades, createTrade, getTrade, deleteTrade, updateTrade } = require("../controllers/tradeController")


// For Site Admins ONLY, CRUD for trades (e.g plumbing )
router.route('/').get(getAllTrades).post(createTrade)
router.route('/:trade_id').get(getTrade).delete(deleteTrade).patch(updateTrade)

module.exports = router