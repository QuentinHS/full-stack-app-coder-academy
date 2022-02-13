require("dotenv").config()
const jwt = require("jsonwebtoken")
const { StatusCodes } = require("http-status-codes")

// create new jwt
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
  return token
}

// verify user's jwt
const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET)

// create cookie and send to user with jwt
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  // send cookie to user
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  })
}

module.exports = {
  isTokenValid,
  createJWT,
  attachCookiesToResponse,
}

