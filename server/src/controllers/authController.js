const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")
const jwt = require("jsonwebtoken")
const { createJWT } = require("../utils")

const register = async (req, res) => {
  const { email, firstName, password } = req.body

  const emailAlreadyExists = await User.findOne({email})
  if ( emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists")
  }

  // first registed user is admin

  const isFirstAccount = await User.countDocuments({}) === 0
  const role = isFirstAccount ? 'admin' : 'trade provider'

  const user = await User.create({firstName, email, password, role})
  const tokenUser = {name: user.firstName, userId: user._id, role: user.role}
  // const token = jwt.sign(tokenUser, 'jwtSecret', {
  //   expiresIn: '1d'
  // })
  const token = createJWT({payload: tokenUser})

  res.status(StatusCodes.CREATED).json({user: tokenUser, token})
}

  // const token = user.createJWT()
  // res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })

// const login = async (req, res) => {
//   const { email, password } = req.body

//   if (!email || !password) {
//     throw new BadRequestError("Please provide email and password")
//   }
//   const user = await User.findOne({ email })
//   if (!user) {
//     throw new UnauthenticatedError("Invalid Credentials")
//   }
//   const isPasswordCorrect = await user.comparePassword(password)
//   if (!isPasswordCorrect) {
//     throw new UnauthenticatedError("Invalid Credentials")
//   }
//   // compare password
//   const token = user.createJWT()
//   res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
// }

module.exports = {
  register,
  // login,
}
