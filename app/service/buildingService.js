const buildingSchemaModal = require('../models/buildingModal');

const getAllBuildings = async () => {
  try {
    return await buildingSchemaModal.find();
  } catch (error) {
    throw error;
  }
};

const createBuilding = async (buildingData) => {
  try {
    const building = new buildingSchemaModal(buildingData);
    return await building.save();
  } catch (error) {
    throw error;
  }
};

const getBuildingById = async (id) => {
  try {
    return await buildingSchemaModal.findById(id);
  } catch (error) {
    throw error;
  }
};

const updateBuilding = async (id, buildingData) => {
  try {
    return await buildingSchemaModal.findByIdAndUpdate(id, buildingData, { new: true, runValidators: true });
  } catch (error) {
    throw error;
  }
};

const deleteBuilding = async (id) => {
  try {
    return await buildingSchemaModal.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBuildings,
  createBuilding,
  getBuildingById,
  updateBuilding,
  deleteBuilding,
};
