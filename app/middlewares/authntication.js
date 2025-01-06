const jwt = require('jsonwebtoken')
const User = require('../models/userModal');

const authenticateUser = (req, res, next) => {
  // const token = req.header('Authorization').split(" ")[1];
  const token = req.header('Authorization');
  let tokenData
  try {
    tokenData = jwt.verify(token, 'test123');
    User.findById(tokenData)
        .then((user)=>{
          req.user = user
          next();
        })
        .catch((err)=> {
          res.json(err)
        })
  }
  catch (err) {
    res.json(err.message)
  }
}

module.exports = {
  authenticateUser
} 