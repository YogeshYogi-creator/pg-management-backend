const mongoose = require('mongoose');

const configureDB = () => {
  mongoose.connect('mongodb://localhost:27017/propertyDb')
    .then(() => {
      console.log('connected to propertyDb');
    })
    .catch((err) => {
      console.log(`error connecting to DB: ${err}`);
    })
}

module.exports = configureDB;