const Trade = require('../models/Trade')
const Task = require('../models/Task')
const User = require('../models/User')
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllTrades = async(req, res) =>{
    req.body.task = req.params.id 
    const trades = await Trade.find({})
    res.status(StatusCodes.OK).json({ trades, count: trades.length })
}

const createTrade = async(req, res) =>{
    const trade = await Trade.create(req.body)
    res.status(StatusCodes.CREATED).json({ trade })
}

const getTrade = async(req, res)=>{
    const { id } = req.params

  const trade = await Trade.findOne({
    _id: id,
  })
}

const deleteTrade = async(req, res)=>{

}

const updateTrade = async(req, res)=>{

}



module.exports = {
    getAllTrades,
    createTrade,
    getTrade,
    deleteTrade,
    updateTrade,
  }