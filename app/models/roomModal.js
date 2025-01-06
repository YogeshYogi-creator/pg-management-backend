const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  buildingId: { type: String },
  buildingNname: { type: String },
  roomNumber: { type: Number },
  noOfBeds: { type: Number },
  noOfWashrooms: { type: Number },
  noOfBathrooms: { type: Number },
  completedAt: { type: Date }
})

const roomSchemaModal = mongoose.model('RoomSchemaModal', roomSchema);

module.exports = roomSchemaModal;