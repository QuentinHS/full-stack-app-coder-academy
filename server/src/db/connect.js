const mongoose = require("mongoose")

// connnect to db
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
