const CustomError = require("../errors")
const { isTokenValid } = require("../utils/jwt")

// authenticate user by checking validity of jwt
const authenticateUser = async (req, res, next) => {
  // get jwt from cookies parsed with cookie parser
  const token = req.cookies.token
  if (!token) {
    throw new CustomError.UnauthenticatedError("Error 1")
  }
    try {
      // check token validity
      const {firstName, userId, role} = isTokenValid(token)
      // Attach the user and his permissions to the req object
      // create req.user object from token info
      req.user = {firstName, userId, role}
      console.log(req.user)
      next()
     
    } catch (error) {
      throw new CustomError.UnauthenticatedError("Error 2")
    }
}

// check authorisation of user roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError("Unauthorized to access this route")
    }
    next()
  }
}




module.exports = { authenticateUser, authorizeRoles }

