const Stage = require("../models/Stage")
const Project = require("../models/Project")
const Task = require("../models/Task")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

// get all stages
const getAllStages = async (req, res) => {
  req.body.project = req.params.id

  const stages = await Stage.find({ project: req.body.project }).sort("createdAt")
  res.status(StatusCodes.OK).json({ stages, count: stages.length })
}

// create new stage
const createStage = async (req, res) => {
  const { id } = req.params
  const project = await Project.findById(id)
  const stage = new Stage(req.body)
  stage.project = id

  project.stages.push(stage)

  await stage.save()
  await project.save()

  res.status(StatusCodes.CREATED).json({ stage })
}

// const createStage = async (req, res) => {
//   req.body.project = req.params.id
//   const stage = await Stage.create(req.body)
//   res.status(StatusCodes.CREATED).json({ stage })
// }

// get single stage
const getStage = async (req, res) => {
  const { id } = req.params

  const stage = await Stage.findOne({
    _id: id,
  })
    .populate({ path: "tasks" })
    .populate("tasks")

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
// delete single stage
const deleteStage = async (req, res) => {
  const { id } = req.params
  // cascade delete for dependent tasks
  await Task.deleteMany({ stage: id })
  const stage = await Stage.findOneAndDelete({ _id: id })
  if (!stage) {
    throw new NotFoundError(`No stage with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ stage })
}
// update single stage
const updateStage = async (req, res) => {
  const { id, name } = req.params
  // ensure fields are filled in
  if (name === "") {
    throw new BadRequestError("Name field cannot be empty")
  }

  const stage = await Stage.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
  // throw error if no stage with id
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
