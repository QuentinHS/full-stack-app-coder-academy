
require("express-async-errors")
// const createServer = require("./utils/server.js")
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")


const authenticateUser = require("./middleware/authentication")

// creates the server with express 
// const app = createServer()
const app = express()
app.use(express.json())
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

app.use("/projects", projectRouter)
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

// app.use(helmet())
// app.use(cors())
// app.use(xss())

//  routes
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', authenticateUser, tasksRouter);

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)


module.exports = app