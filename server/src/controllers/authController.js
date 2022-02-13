const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")
const jwt = require("jsonwebtoken")
const { attachCookiesToResponse, createTokenUser } = require("../utils")

// Register new user
const register = async (req, res) => {
  const { email, firstName, lastName, businessName, abn, password, role } = req.body
  // check if email already exists
  const emailAlreadyExists = await User.findOne({email})
  if ( emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists")
  }

  // method to make first registed user is admin

  // const isFirstAccount = await User.countDocuments({}) === 0
  // role = isFirstAccount && 'admin'
  // create new user with details from body
  const user = await User.create({firstName, lastName, businessName, abn, email, password, role,})
  console.log(user)
  const tokenUser = createTokenUser(user)
  console.log(tokenUser)
  // send jwt back to user
  attachCookiesToResponse({res, user: tokenUser})
  // send user details as json object
  res.status(StatusCodes.CREATED).json({ user: {...tokenUser, lastName: user.lastName, businessName: user.businessName, abn: user.abn }})

}
// login user
const login = async(req, res) => {
  // get details from form
   const { email, password } = req.body
  //  throw error if details not present
   if (!email || !password) {
     throw new CustomError.BadRequestError("Please provide email and password")
   }
  //  find user with details
   const user = await User.findOne({email})
  //  throw error if no user with details
   if (!user) {
     throw new CustomError.UnauthenticatedError('Invalid Credentials')
   }
    // compare hashed passwords
   const isPasswordCorrect = await user.comparePassword(password)
  //  throw error if password incorrect
   if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials")
   }
  
  const tokenUser = createTokenUser(user)
  //  send jwt back to user
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.CREATED).json({ user: tokenUser })
}
// logout user
const logout = async(req,res) => {
  // res.cookie("token", "logout", {httpOnly: true,
  // expires: new Date(Date.now() + 5 * 1000 )}
  // )
  // clear cookie in user browser so jwt no longer works
  res.clearCookie("token", {path: "/"})
  
  res.clearCookie("token")
  res.status(StatusCodes.OK).json({msg: "user logged out"})

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
  login,
  logout
}
