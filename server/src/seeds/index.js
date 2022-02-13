require("dotenv").config()
// import required models and json data for seeding
const connectDB = require("../db/connect")
const User = require("./models/User")
const Task = require("./models/Task")
const Project = require("./models/Project")
const Project = require("./models/Trade")
const Stage = require("./models/Stage")
const jsonTasks = require("./tasks.json")
const jsonUsers = require("./users.json")
const jsonProjects = require("./projects.json")
const jsonStages = require("./stages.json")
const jsonTrades = require("./trades.json")

// delete previous records and create new records to test application
const start = async () => {
  try {
    // connect to seed database
    await connectDB(process.env.MONGO_URI_TEST)
    // delete existing records in database
    await User.deleteMany()
    await Task.deleteMany()
    await Project.deleteMany()
    await Stage.deleteMany()
    await Trade.deleteMany()
    // create users from json files
    await Trade.create(jsonTrades)
    await User.create(jsonTasks)
    await Task.create(jsonUsers)
    await Stage.create(jsonStages)
    await Project.create(jsonProjects)
    // exit with success signal
    process.exit(0)
  } catch (e) {
    console.log(e)
    // exit with failed signal
    process.exit(1)
  }
}

// run database
start()
