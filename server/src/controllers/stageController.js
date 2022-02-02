const Stage = require("../models/Stage")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllStages = async (req, res) => {
    req.body.project = req.params.id

//   console.log(req.body)
//   console.log(req.params)

  const stages = await Stage.find({project: req.body.project}).sort("createdAt")
  res.status(StatusCodes.OK).json({ stages, count: stages.length })
}

const createStage = async (req, res) => {
  req.body.project = req.params.id
  const stage = await Stage.create(req.body)
  res.status(StatusCodes.CREATED).json({ stage })
}

const getStage = async (req, res) => {
  const { id } = req.params

  const stage = await Stage.findOne({
    _id: id,
  })

  // method to find project linked to user when user methods are tested + working
  //  const project = await Project.findOne({
  //    _id: jobId,
  //    createdBy: userId,
  //  })

  //   if (!stage) {
  //     throw new NotFoundError(`No stage with id ${id}`)
  //   }

  res.status(StatusCodes.OK).json({ stage })
}

const deleteStage = async (req, res) => {
  const { id } = req.params
  const stage = await Stage.findOneAndDelete({ _id: id })
  if (!stage) {
    throw new NotFoundError(`No stage with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ stage })
}

const updateStage = async (req, res) => {
  const { id, name } = req.params

  if (name === "") {
    throw new BadRequestError("Name field cannot be empty")
  }

  const stage = await Stage.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!stage) {
    throw new NotFoundError(`No stagewith id ${id}`)
  }

  res.status(StatusCodes.OK).json({ stage })
}

module.exports = {
  getAllStages,
  createStage,
  getStage,
  deleteStage,
  updateStage,
}
