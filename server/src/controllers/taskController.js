const Task = require("../models/Task")
const Stage = require("../models/Stage")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")
const Project = require("../models/Project")

// get all tasks
const getAllTasks = async (req, res) => {
  req.body.stage = req.params.id
  const { stage } = req.body 
  const tasks = await Task.find({ stage }).sort("createdAt")

  res.status(StatusCodes.OK).json({ tasks, count: tasks.length})
}

// create new task
const createTask = async (req, res) => {
  // get id from url params
  const { id } = req.params
  // find stage with that id to add task to
  const stage = await Stage.findById(id)
  // create new task from form details
  const task = new Task(req.body)
  // add foreign key to task 
  task.stage = id

  stage.tasks.push(task)
  // save both task and stage
  await task.save()
  await stage.save()

  // req.body.stage = req.params.id
    // get trade category from form body
   const {tradeCategory, assignedTradeProvider} = req.body
   const trade = await Trade.findById(tradeCategory)
   const traderProvider =  await User.findById(assignedTradeProvider)
  // assign category to task
   task.tradeCategory = trade 
   task.assignedTradeProvider = traderProvider
   task.save()

  // const task = await Task.create(req.body)
  res.status(StatusCodes.CREATED).json({ task })
}

// get single task
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

// delete a single task
const deleteTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findOneAndDelete({ _id: id })
  if (!task) {
    throw new NotFoundError(`No task with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ task })
}

// update single task
const updateTask = async (req, res) => {
  const { id, name } = req.params
  // ensure fields are filled in with appropriate details
  if (name === "") {
    throw new BadRequestError("Name field cannot be empty")
  }
  // find and update single task with id
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
  // throw error if no task with that id
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
