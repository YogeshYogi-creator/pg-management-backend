const UserSchemaModel = require('../models/userModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerUser } = require('../service');

const usersController = {};

usersController.register = async (req, res) => {
  const userData = req.body;

  const result = await registerUser(userData);

  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json(result.error);
  }
}

usersController.login = (req, res) => {
  const body = req?.body;
  UserSchemaModel.findOne({ email: body?.email })
    .then((response) => {
      !response && res.json({ error: 'invalid email or password!' });
      bcrypt.compare(body.password, response.password)
        .then((match) => {
          // match ? res.json(response) : res.json({ error: 'invalid email or password!' });
          if (match) {
            const tokenData = {
              _id: response._id,
              userName: response.userName,
              type: response.type,
              email: response.email
            }
            const token = jwt.sign(tokenData, 'test123', { expiresIn: '2d' });
            return res.json({ token: token });
          }
          else {
            res.json({ error: 'invalid email or password!' });
          }
        })
    }
    )
}

usersController.account = (req, res) => {
  console.log({ req })
  res.json(req.user)
}

module.exports = usersController;