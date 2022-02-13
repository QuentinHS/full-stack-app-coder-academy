const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")
const { createTokenUser, attachCookiesToResponse, checkPermissions } = require("../utils")


// get all users - admin only
const getAllUsers = async(req, res) => {
  console.log(req.cookies)
  console.log(req.user)
  const users = await User.find({ role: "trade provider" }).select("-password")
  res.status(StatusCodes.OK).json({ users })
}

// show current user details
const showCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId }).select("-password")
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id} `)
  }
  console.log(user)
  res.status(StatusCodes.OK).json({user: user})
}

// get single user
const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password")
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id} `)
  }
  checkPermissions(req.user, user._id)
  res.status(StatusCodes.OK).json({ user })
}


// update user details
const updateUser = async (req, res) => {
  // get information from form
  const { email, firstName, lastName, businessName, abn } = req.body
  if (!email || !firstName || !lastName|| !businessName) {
    throw new CustomError.BadRequestError("Please provide all values")
  }
  // find user with appropriate id
  const user = await User.findOne({_id: req.user.userId})

  
  user.firstName = firstName
  user.lastName = lastName 
  user.email = email
  user.businessName = businessName
  user.abn = abn 

  await user.save()

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ user: user })
}


// update user password
const updateUserPassword = async (req, res) => {
  const { oldPassword, password } = req.body
  if (!oldPassword || !password) {
    throw new CustomError.BadRequestError('Please provide both values')
  }
  const user = await User.findOne({_id: req.user.userId})
  const isPasswordCorrect = await user.comparePassword(oldPassword)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  user.password = password
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
