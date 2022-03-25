const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Su sesión expiró");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("Su sesión expiró");
    }

    const { id, email } = jwt.verify(token, process.env.SECRET);

    req.user = id;
    console.log("middleware", email);
    req.body["email"] = email;

    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
