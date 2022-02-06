const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")

// Get all project managers 

// const getAllProjectManagers = async (req, res) => {
//   const users = await User.find({ role: "project manager" }).select("-password")
//   res.status(StatusCodes.OK).json({ users })

// // Get all trade providers

// const getAllTradeProviders = async (req, res) => {
//   const users = await User.find({ role: "trade provider" }).select("-password")
//   res.status(StatusCodes.OK).json({ users })
//   }
// }

// Protected Route / Trade Provider User
// Get Single User   

// const getSingleUser = async (req, res) => {
//   const user = await User.findOne({ _id: req.params.id }).select("-password")
//   if (!user) {
//     throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`)
//   }
//   res.status(StatusCodes.OK).json({ user })
// }

// Protected Route / Admin or User
// Show Current User  

// New routes

const getAllUsers = async(req, res) => {
  console.log(req.cookies)
  console.log(req.user)
  const users = await User.find({ role: "trade provider" }).select("-password")
  res.status(StatusCodes.OK).json({ users })
}

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({user: req.user})
}

const getSingleUser = async (req, res) => {

  const user = await User.findOne({ _id: req.params.id }).select("-password")
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id} `)
  }
  res.status(StatusCodes.OK).json({user})
}

const updateUser = async (req, res) => {
  res.send("update user route")
}

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values')
  }
  const user = await User.findOne({_id: req.user.userId})
  const isPasswordCorrect = await user.comparePassword(oldPassword)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  user.password = newPassword
  await user.save()
  res.status(StatusCodes.OK).json({msg: 'Success! Password Updated'})
}

module.exports = {
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updateUser,
 updateUserPassword
}
