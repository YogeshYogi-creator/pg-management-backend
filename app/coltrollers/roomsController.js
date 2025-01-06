const roomService = require('../service');

const roomController = {};

roomController.welcome = (req, res) => {
  res.json('Welcome');
};

roomController.list = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

roomController.create = async (req, res) => {
  try {
    const room = await roomService.createRoom(req.body);
    res.json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

roomController.show = async (req, res) => {
  try {
    const room = await roomService.getRoomById(req.params.id);
    res.json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

roomController.update = async (req, res) => {
  try {
    const room = await roomService.updateRoom(req.params.id, req.body);
    res.json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

roomController.delete = async (req, res) => {
  try {
    const room = await roomService.deleteRoom(req.params.id);
    res.json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = roomController;