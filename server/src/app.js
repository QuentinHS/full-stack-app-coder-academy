require("dotenv").config()
require("express-async-errors")
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

const connectDB = require("./db/connect")
const authenticateUser = require("./middleware/authentication")

const app = express()

// routers
// const authRouter = require("./routes/authRouter")
// const tasksRouter = require("./routes/tasksRouter")
// const stageRouter = require("./routes/stageRouter")
const projectRouter = require("./routes/projectRouter")
// const userRouter = require("./routes/userRouter")
// const homeRouter = require("./routes/homeRouter")
// const tradeProviderRouter = require("tradeProviderRouter")
// const tradeRouter = require("./routes/tradeRouter")

// users/:id/projects/:project_id/stages/:stage_id/tasks/:task_id

// stageRouter.use('projects/:project_id/stages/:stage_id/tasks', taskRouter)
// projectRouter.use('projects/:project_id/stages', stageRouter);



// authRouter.route('/register')
//   .get(function(req, res){
//     res.status
// //   })


// 
// // error handler
// const notFoundMiddleware = require("./middleware/not-found")
// const errorHandlerMiddleware = require("./middleware/error-handler")
// 
// app.set("trust proxy", 1)

// limit api requests
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   })
// )

app.use(express.json())
// app.use(helmet())
// app.use(cors())
// app.use(xss())

//  routes
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', authenticateUser, tasksRouter);

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 7000

const start = async () => {
  try {
    // connectDB
    await connectDB("mongodb+srv://quentinhs:0bqwBNk7CulalUqS@cluster0.edxqn.mongodb.net/FullStackApp?retryWrites=true&w=majority")
    app.listen(5000, console.log(`server is listening on ${5000}`))
  } catch (e) {
    console.log(e)
  }
}

start()
