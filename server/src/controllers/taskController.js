const Task = require("../models/Task")
const Stage = require("../models/Stage")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")
const Project = require("../../../../../../../../mnt/c/projects/term3/full-stack-app-coder-academy/server/src/models/Project")

const getAllTasks = async (req, res) => {
  req.body.stage = req.params.id
  const { stage } = req.body 
  const tasks = await Task.find({ stage }).sort("createdAt")

  res.status(StatusCodes.OK).json({ tasks, count: tasks.length})
}

const createTask = async (req, res) => {

  const { id } = req.params
  const stage = await Stage.findById(id)
  const task = new Task(req.body)
  task.stage = id

  stage.tasks.push(task)

  await task.save()
  await stage.save()

  // req.body.stage = req.params.id

   console.log(req.body)
   console.log(req.params)

  // const task = await Task.create(req.body)
  res.status(StatusCodes.CREATED).json({ task })
}

const getTask = async (req, res) => {
  const { id } = req.params

  const task = await Task.findOne({
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

  res.status(StatusCodes.OK).json({ task })
}

const deleteTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findOneAndDelete({ _id: id })
  if (!task) {
    throw new NotFoundError(`No task with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ task })
}

const updateTask = async (req, res) => {
  const { id, name } = req.params

  if (name === "") {
    throw new BadRequestError("Name field cannot be empty")
  }

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    throw new NotFoundError(`No task with id ${id}`)
  }

  res.status(StatusCodes.OK).json({ task })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
}
