const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  userId: { type: String },
  name: { type: String },
  address: { type: String },
  rooms: { type: Number },
  completedAt: { type: Date }
})

const buildingSchemaModal = mongoose.model('BuildingSchemaModal', buildingSchema);

module.exports = buildingSchemaModal;