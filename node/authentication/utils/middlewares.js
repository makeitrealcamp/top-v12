const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if(!token) {
      throw new Error('Su sesión expiró');
    }

    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    req.user = userId;
    next();
  } catch(error) {
    res.status(401).json({ message: error.message })
  }
}
