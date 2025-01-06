const roomSchemaModal = require('../models/roomModal');

const getAllRooms = async () => {
  try {
    return await roomSchemaModal.find();
  } catch (error) {
    throw error;
  }
};

const createRoom = async (roomData) => {
  try {
    const room = new roomSchemaModal(roomData);
    return await room.save();
  } catch (error) {
    throw error;
  }
};

const getRoomById = async (id) => {
  try {
    return await roomSchemaModal.findById(id);
  } catch (error) {
    throw error;
  }
};

const updateRoom = async (id, roomData) => {
  try {
    return await roomSchemaModal.findByIdAndUpdate(id, roomData, { new: true, runValidators: true });
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async (id) => {
  try {
    return await roomSchemaModal.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
};
