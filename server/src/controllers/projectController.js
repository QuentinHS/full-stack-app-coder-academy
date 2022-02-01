const Project = require("../models/Project")

const getAllProjects = async (req, res) => {
  const projects = await Project.find({})
  res.status(200).json({ projects })
}

const createProject = async (req, res) => {
  const project = await Project.create(req.body)
  res.status(201).json({ project })
}

const getProject = async (req, res) => {
  const { id } = req.params

  const project = await Project.findOne({
    _id: id,
  })

  if (!project) {
    // throw new NotFoundError(`No project with id ${id}`)
    throw new Error("cannot find project")
  }
  res.status(200).json({ project })
}

const deleteProject = async (req, res) => {
  const { id } = req.params
  const project = await Project.findOneAndDelete({ _id: id })
  if (!project) {
    throw new Error("cannot delete project")
  }
  res.status(200).json({ project })
}

const updateProject = async (req, res) => {
  const { id } = req.params

  const project = await Project.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!project) {
    throw new Error("cannot update project")
  }

  res.status(200).json({ project })
}

module.exports = {
  getAllProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
}
