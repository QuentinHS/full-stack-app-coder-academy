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
  
  const users = await User.find({ role: "trade provider" }).select("-password")
  res.status(StatusCodes.OK).json({ users })
}

const showCurrentUser = async (req, res) => {
  res.send("show current user route")
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
  res.send("update user password route")
}

module.exports = {
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updateUser,
 updateUserPassword
}
