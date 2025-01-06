const tenantsSchemaModal = require('../models/tenantModal');

const getAllTenants = async () => {
  try {
    return await tenantsSchemaModal.find();
  } catch (error) {
    throw error;
  }
};

const createTenant = async (tenantData) => {
  try {
    const tenant = new tenantsSchemaModal(tenantData);
    return await tenant.save();
  } catch (error) {
    throw error;
  }
};

const getTenantById = async (id) => {
  try {
    return await tenantsSchemaModal.findById(id);
  } catch (error) {
    throw error;
  }
};

const updateTenant = async (id, buildingData) => {
  try {
    return await tenantsSchemaModal.findByIdAndUpdate(id, buildingData, { new: true, runValidators: true });
  } catch (error) {
    throw error;
  }
};

const deleteTenant = async (id) => {
  try {
    return await tenantsSchemaModal.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTenants,
  createTenant,
  getTenantById,
  updateTenant,
  deleteTenant,
};
