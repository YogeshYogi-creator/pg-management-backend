const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 64,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate:
    {
      validator: (value) => isEmail(value),
      message: () => 'invalid email format!!'
    }
  },
  type: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value === 'admin' || value === 'customer',
      message: () => 'invalid type of user!!'
    }
  },
  password: { type: String, required: true, minlength: 8, maxlength: 128 }
})

const UserSchemaModel = mongoose.model('UserSchemaModel', userSchema);

module.exports = UserSchemaModel