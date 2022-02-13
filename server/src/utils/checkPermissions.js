const CustomError = require("../errors")


// Check authorisation permissions for current user
const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") return
  if (requestUser.userId === resourceUserId.toString()) return
  throw new CustomError.UnauthorizedError("You are not authorized to acceess this route")
}

module.exports = checkPermissions
