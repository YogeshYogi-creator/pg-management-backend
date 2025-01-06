const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  buildingId: { type: String },
  roomId: { type: String },
  buildingNname: { type: String },
  roomNumber: { type: Number },
  tenantName: { type: String },
  aadharNo: { type: String },
  completedAt: { type: Date }
})

const roomSchemaModal = mongoose.model('TenantSchemaModal', tenantSchema);

module.exports = roomSchemaModal;