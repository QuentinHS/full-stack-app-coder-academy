require("express-async-errors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const createServer = require("./utils/server")

// creates the server with express
const app = createServer()

// cors settings
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
)

// middleware
// logger
app.use(morgan("tiny"))
// parse cookies sent with requests
app.use(cookieParser())
app.set("trust proxy", 1)
// limit api request rate
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
)
// extra security middleware 
app.use(helmet())
app.use(xss())

// error handling middleware
app.use(errorHandlerMiddleware)

// routers
const authRouter = require("./routes/authRouter")
const taskRouter = require("./routes/taskRouter")
const projectRouter = require("./routes/projectRouter")
const stageRouter = require("./routes/stageRouter")
const userRouter = require("./routes/userRouter")
// const homeRouter = require("./routes/homeRouter")
// const tradeProviderRouter = require("tradeProviderRouter")
const tradeRouter = require("./routes/tradeRouter")

// using routers
app.use("/trades", tradeRouter)
app.use("/projects/:id/stages/:id/tasks", taskRouter)
app.use("/projects/:id/stages", stageRouter)
app.use("/projects", projectRouter)
app.use("/", userRouter)
app.use("/", authRouter)

module.exports = app
