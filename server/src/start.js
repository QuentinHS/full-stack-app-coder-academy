const app = require('./app')
const connectDB = require("./db/connect")
require("dotenv").config()
const PORT = process.env.PORT || 7000

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`server is listening on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()