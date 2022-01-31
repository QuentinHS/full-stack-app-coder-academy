require("dotenv").config()
require("express-async-errors")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

const connectDB = require("./db/connect")
const authenticateUser = require("./middleware/authentication")
// routers
const authRouter = require("./routes/auth")
const tasksRouter = require("./routes/tasks")
// error handler
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.set("trust proxy", 1)

// limit api requests
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', authenticateUser, tasksRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 7000

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
