const jwt = require("jsonwebtoken")
const { StatusCodes } = require("http-status-codes")

// const defaultOptions = {
//   expiresIn: process.env.JWT_LIFETIME,
// }

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
  return token
}

// const createJWT = ({ payload, options }) => {
//   const token = jwt.sign(payload, process.env.JWT_SECRET, {
//     ...defaultOptions,
//     ...options,
//   })
//   return token
// }

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({res, user}) => {
  const token = createJWT({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  // res.cookie("token", token, {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + oneDay),
  //   secure: process.env.NODE_ENV === 'production',
  //   signed: true
  // })

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  })

} 

// const sendResponseWithCookie = ({ res, statusCode, user, options }) => {
//   const token = createJWT({ payload: { user }, options })

//   const oneDay = 1000 * 60 * 60 * 24
//   res.cookie("token", token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + process.env.JWT_COOKIE_LIFETIME * oneDay),
//     signed: true,
//     // secure flag later
//   })
//   res.status(statusCode).json({ user, token })
// }

module.exports = {
  isTokenValid,
  createJWT,
  attachCookiesToResponse
}


// module.exports = {
//   isTokenValid,
//   createJWT,
//   sendResponseWithCookie,
// }
