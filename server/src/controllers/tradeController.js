const Trade = require('../models/Trade')
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
      _id: id
    })
    if (!trade) {
        throw new NotFoundError(`No trade with id ${id}`)
      }
    res.status(StatusCodes.OK).json({ trade })
}

const deleteTrade = async(req, res)=>{
    const {id} = req.params 
    const trade = await Trade.findOneAndDelete({_id: id})
    if (!trade) {
        throw new NotFoundError(`No trade with id ${id}`)
      }
    res.status(StatusCodes.OK).json({ trade })

}

const updateTrade = async(req, res)=>{
    const {id, name} = req.params

    if (name === "") {
        throw new BadRequestError("Name field cannot be empty")
      }
    const trade = await Trade.findByIdAndUpdate({ _id: id}, req.body, 
        {new: true,
        runValidators: true
    })
    if (!trade) {
        throw new NotFoundError(`No trade with id ${id}`)
      }
    res.status(StatusCodes.OK).json({ trade })

}



module.exports = {
    getAllTrades,
    createTrade,
    getTrade,
    deleteTrade,
    updateTrade,
  }