const CustomError = require("../errors")
const { isTokenValid } = require("../utils/jwt")

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication invalid")
  }
    try {
      const {name, userId, role} = isTokenValid(token)
      // Attach the user and his permissions to the req object
      req.user = {name, userId, role}
      console.log(req.user)
      next()
     
    } catch (error) {
      throw new CustomError.UnauthenticatedError("Authentication invalid")
    }
}

const authorizePermissions = (req, res, next) => {
  console.log('admin route')
  if (req.user.role !== "trade provider") {
    throw new CustomError.UnauthorizedError("Unauthorized to access this route")
  }
  next()
}
 
// // authorizePermissions
// const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       throw new CustomError.UnauthorizedError("Unauthorized to access this route")
//     }
//     next()
//   }
// }




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
// // authorizePermissions
// const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       throw new CustomError.UnauthorizedError("Unauthorized to access this route")
//     }
//     next()
//   }
// }

// module.exports = { authenticateUser, authorizeRoles }


module.exports = { authenticateUser, authorizePermissions }

