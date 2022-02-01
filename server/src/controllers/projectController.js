const Project = require("../models/Project")

const getAllProjects = async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json({projects})
}

const createProject = async (req, res) => {
    const project = await Project.create(req.body)
    res.status(201).json({project})
}

module.exports = {
    getAllProjects,
    createProject
}