const buildingsService = require('../service');

const buildingsController = {};

buildingsController.welcome = (req, res) => {
  res.json('Welcome');
};

buildingsController.list = async (req, res) => {
  try {
    const buildings = await buildingsService.getAllBuildings();
    res.json(buildings);
  } catch (error) {
    res.status(500).json(error);
  }
};

buildingsController.create = async (req, res) => {
  try {
    const building = await buildingsService.createBuilding(req.body);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

buildingsController.show = async (req, res) => {
  try {
    const building = await buildingsService.getBuildingById(req.params.id);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

buildingsController.update = async (req, res) => {
  try {
    const building = await buildingsService.updateBuilding(req.params.id, req.body);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

buildingsController.delete = async (req, res) => {
  try {
    const building = await buildingsService.deleteBuilding(req.params.id);
    res.json(building);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = buildingsController;
