require("dotenv").config()

const connectDB = require("./db/connect")
const User = require("./models/User")
const Task = require("./models/Task")

const jsonTasks = require("./tasks.json")
const jsonUsers= require("./users.json")

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await User.deleteMany()
    await Task.deleteMany()
    await User.create(jsonTasks)
    await Task.create(jsonUsers)
    process.exit(0)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

start()
