const Project = require("../models/Project")
const Stage = require("../models/Stage")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllProjects = async (req, res) => {
  const projects = await Project.find({ projectManager: req.user.userId }).sort("-createdAt")
  res.status(StatusCodes.OK).json({ projects, count: projects.length })
}


const createProject = async (req, res) => {
  const project = await Project.create({...req.body, projectManager: req.user.userId})
 
  res.status(StatusCodes.CREATED).json({ project })
}

const getProject = async (req, res) => {
  const { id } = req.params

  const project = await Project.findOne({
    _id: id,
  })
    .populate({ path: "stages" })
    .populate("stages")


  // method to find project linked to user when user methods are tested + working
  //  const project = await Project.findOne({
  //    _id: jobId,
  //    createdBy: userId,
  //  })

  if (!project) {
    throw new NotFoundError(`No project with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ project })
}

const deleteProject = async (req, res) => {
  const { id } = req.params
  const project = await Project.findOneAndDelete({ _id: id })
  if (!project) {
    throw new NotFoundError(`No project with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ project })
}

const updateProject = async (req, res) => {
  const { id, name } = req.params

  if (name === "") {
    throw new BadRequestError("Name field cannot be empty")
  }

  const project = await Project.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!project) {
     throw new NotFoundError(`No project with id ${id}`)
  }

  res.status(StatusCodes.OK).json({ project })
}

module.exports = {
  getAllProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
}
