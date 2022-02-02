require("dotenv").config()
require("express-async-errors")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
// const helmet = require("helmet")
// const cors = require("cors")
// const xss = require("xss-clean")
// const rateLimiter = require("express-rate-limit")
const createServer = require("./utils/server")

const connectDB = require("./db/connect")
// const authenticateUser = require("./middleware/authentication")

const app = createServer()


// routers
// const authRouter = require("./routes/authRouter")
// const tasksRouter = require("./routes/tasksRouter")
// const stageRouter = require("./routes/stageRouter")
const projectRouter = require("./routes/projectRouter")
// const userRouter = require("./routes/userRouter")
// const homeRouter = require("./routes/homeRouter")
// const tradeProviderRouter = require("tradeProviderRouter")
// const tradeRouter = require("./routes/tradeRouter")

app.use("/projects", projectRouter)
// app.use("/projects/:id/stages", stageRouter)
// app.use("/projects/:id/stages/:id/tasks", taskRouter)


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
// app.use(cors())
// app.use(xss())

//  routes
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', authenticateUser, tasksRouter);

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    // connectDB
    await connectDB("mongodb+srv://quentinhs:YKuX6xaAPKw8CP6A@cluster0.edxqn.mongodb.net/fullstackappprojectcontroller?retryWrites=true&w=majority")
    app.listen(6000, console.log(`server is listening on ${6000}`))
  } catch (e) {
    console.log(e)
  }
}

start()

