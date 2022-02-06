require("express-async-errors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
// const helmet = require("helmet")
const cors = require("cors")
// const xss = require("xss-clean")
// const rateLimiter = require("express-rate-limit")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")


const createServer = require("./utils/server")
const authenticateUser = require("./middleware/authentication")

// creates the server with express 
const app = createServer()

app.use(cors())

app.use(morgan("tiny"))
app.use(cookieParser())
// app.use(cookieParser(process.env.JWT_SECRET))

// routers
const authRouter = require("./routes/authRouter")
const taskRouter = require("./routes/taskRouter")
const projectRouter = require("./routes/projectRouter")
const stageRouter = require("./routes/stageRouter")
const userRouter = require("./routes/userRouter")
// const homeRouter = require("./routes/homeRouter")
// const tradeProviderRouter = require("tradeProviderRouter")
// const tradeRouter = require("./routes/tradeRouter")


// users/:id/projects/:project_id/stages/:stage_id/tasks/:task_id

app.use("/projects/:id/stages/:id/tasks", taskRouter)
app.use("/projects/:id/stages", stageRouter)
app.use("/projects", projectRouter)
app.use("/", userRouter)
app.use("/", authRouter)





// authRouter.route('/register')
//   .get(function(req, res){
//     res.status
// //   })


// 
// error handler
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
// 
// app.set("trust proxy", 1)

// limit api requests
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   })
// )



// app.use(helmet())

// app.use(xss())

//  routes
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', authenticateUser, tasksRouter);


module.exports = app 
