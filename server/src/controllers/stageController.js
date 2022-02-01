const Stage = require('../models/stage')

const getAllStages = async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json({projects})
}