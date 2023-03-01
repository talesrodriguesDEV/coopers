const jwt = require('jsonwebtoken')

const authenticateLogin = (req, res, next) => {
  const token = req.headers.authorization

  try {
    const { _id } = jwt.verify(token, 'jwt_secret')
    req.id = _id
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  next()
}

module.exports = {
  authenticateLogin
}
