const app = require('./app')
const connectDB = require("./db/connect")
require("dotenv").config()
const port = process.env.PORT || 7000

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI_TEST)
    app.listen(5000, console.log(`server is listening on ${5000}`))
  } catch (e) {
    console.log(e)
  }
}

start()