const CustomError = require("../errors")
const { isTokenValid } = require("../utils/jwt")

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    throw new CustomError.UnauthenticatedError("Error 1")
  }
    try {
      const {firstName, userId, role} = isTokenValid(token)
      // Attach the user and his permissions to the req object
      req.user = {firstName, userId, role}
      console.log(req.user)
      next()
     
    } catch (error) {
      throw new CustomError.UnauthenticatedError("Error 2")
    }
}

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError("Unauthorized to access this route")
    }
    next()
  }
}



// const authenticateUser = async (req, res, next) => {
//   const token = req.signedCookies.token
//   if (!token) {
//     throw new CustomError.UnauthenticatedError("Authentication invalid")
//   }

//   try {
//     const payload = isTokenValid(token)
//     // Attach the user and his permissions to the req object
//     req.user = payload.user

//     next()
//   } catch (error) {
//     throw new CustomError.UnauthenticatedError("Authentication invalid")
//   }
// }


module.exports = { authenticateUser, authorizeRoles }

