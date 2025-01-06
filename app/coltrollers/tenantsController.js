const tenantsService = require('../service');

const tenantsController = {};

tenantsController.welcome = (req, res) => {
  res.json('Welcome');
};

tenantsController.list = async (req, res) => {
  try {
    const buildings = await tenantsService.getAllTenants();
    res.json(buildings);
  } catch (error) {
    res.status(500).json(error);
  }
};

tenantsController.create = async (req, res) => {
  try {
    const building = await tenantsService.createTenant(req.body);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

tenantsController.show = async (req, res) => {
  try {
    const building = await tenantsService.getTenantById(req.params.id);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

tenantsController.update = async (req, res) => {
  try {
    const building = await tenantsService.updateTenant(req.params.id, req.body);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

tenantsController.delete = async (req, res) => {
  try {
    const building = await tenantsService.deleteTenant(req.params.id);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = tenantsController;
