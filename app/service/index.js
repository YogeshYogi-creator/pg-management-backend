const { getAllBuildings, createBuilding, getBuildingById, updateBuilding, deleteBuilding } = require('./buildingService');
const { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom } = require('./roomService');
const { getAllTenants, createTenant, getTenantById, updateTenant, deleteTenant } = require('./tenantsService');
const { registerUser } = require('./userService');

module.exports = {
  registerUser,
  getAllBuildings, createBuilding, getBuildingById, updateBuilding, deleteBuilding,
  getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom,
  getAllTenants, createTenant, getTenantById, updateTenant, deleteTenant,
};