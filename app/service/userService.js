const bcrypt = require('bcrypt');
const UserSchemaModel = require('../models/userModal');

const saltRounds = 10;

const registerUser = async (userData) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const user = new UserSchemaModel({ ...userData, password: hashedPassword });
    const savedUser = await user.save();
    return { success: true, data: savedUser };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { registerUser };
