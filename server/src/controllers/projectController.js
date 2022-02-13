const Project = require("../models/Project")
const Stage = require("../models/Stage")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

// get all projects
const getAllProjects = async (req, res) => {
  const projects = await Project.find({ projectManager: req.user.userId }).sort("-createdAt")
  res.status(StatusCodes.OK).json({ projects, count: projects.length })
}

// create new project
const createProject = async (req, res) => {
  const project = await Project.create({...req.body, projectManager: req.user.userId})
 
  res.status(StatusCodes.CREATED).json({ project })
}

// get single project
const getProject = async (req, res) => {
  const { id } = req.params
  // get project and populate array property with that project's stages in object format
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
  // throw error if no project
  if (!project) {
    throw new NotFoundError(`No project with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ project })
}
// delete single project
const deleteProject = async (req, res) => {
  const { id } = req.params
  await Stage.deleteMany({project: id})
  const project = await Project.findOneAndDelete({ _id: id })
  if (!project) {
    throw new NotFoundError(`No project with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ project })
}
// update single project
const updateProject = async (req, res) => {
  const { id } = req.params

  const project = await Project.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
  // throw error if no project with id
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