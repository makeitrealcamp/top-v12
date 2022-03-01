const jwt = require("jsonwebtoken");

module.exports = {
  async auth(req, res, next) {
    try {
      const authorization = req.headers.authorization;
      if (!authorization) {
        throw Error("Your session has expired");
      }

      const [_, token] = authorization.split(" ");

      if (!token) {
        throw Error("Your session has expired");
      }

      const { id } = jwt.verify(token, process.env.SECRET);

      req.user = id;
      next();
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};
