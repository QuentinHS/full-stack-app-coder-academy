// base custom api error
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError
