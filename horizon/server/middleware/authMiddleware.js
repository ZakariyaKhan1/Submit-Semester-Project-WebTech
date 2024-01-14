// middlewares/authMiddleware.js
import pkg from 'jsonwebtoken';
const { Jwt } = pkg;

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

export {authenticateToken};
