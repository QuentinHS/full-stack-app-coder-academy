// create user to be sent with cookie
const createTokenUser = (user) => {
  return { firstName: user.firstName, userId: user._id, role: user.role }
}

module.exports = createTokenUser