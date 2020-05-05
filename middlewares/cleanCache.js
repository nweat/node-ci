const { clearHash } = require("../services/cache")

module.exports = async (req, res, next) => {
  await next() // wait for route handler to complete
  clearHash(req.user.id)
}
