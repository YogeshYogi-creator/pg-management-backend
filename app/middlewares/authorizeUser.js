const jwt = require('jsonwebtoken')
const User = require('../models/userModal');

const authorizeUser = (req, res, next) => {
  // const token = req.header('Authorization').split(" ")[1];
  const token = req.header('Authorization');
  let tokenData;

  try {
    tokenData = jwt.verify(token, 'test123');
    User.findById(tokenData)
      .then((user) => {
        if (user.type !== 'admin') {
          throw new Error('User is not admin'); // Explicitly throw an error
        }
        req.user = user;
        next();
      })
      .catch((err) => {
        res.json({ error: err.message }); // Catch and send the error
      });
  } catch (err) {
    res.json({ error: err.message }); // Handle errors in token verification or other issues
  }
}

module.exports = {
  authorizeUser
} 