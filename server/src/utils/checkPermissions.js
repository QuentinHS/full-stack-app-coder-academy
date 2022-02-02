const checkPermissions = (user, item) => {
  if (user.role === "project manager") return true
  return false
}

module.exports = checkPermissions
