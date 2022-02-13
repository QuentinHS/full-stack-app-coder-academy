const mongoose = require("mongoose")

const date = new Date()
const user = mongoose.Types.ObjectId()

// for testing the post request 
const projectPayload ={
    name: "project 1",
    address: "123 wallaby way",
    completionDate: date,
    projectManager: user 
}


module.exports = projectPayload