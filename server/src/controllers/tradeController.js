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
    const {id} = req.params 
    const trade = new Trade(req.body)
    const task =  await Task.findById(id)
    task.tradeCategory.push(trade)
    await trade.save()
    await task.save()
    // if(!task){
    //     const user = await User.findById(id)
    //     user.trade.push(trade)
    // }

}

const getTrade = async(req, res)=>{

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