const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../app/middlewares/authntication');
const { authorizeUser } = require('../app/middlewares/authorizeUser');
const BuildingsController = require('../app/coltrollers/buildingsController');
const RoomsController = require('../app/coltrollers/roomsController');
const TenentsController = require('../app/coltrollers/tenantsController');
const usersController = require('../app/coltrollers/usersController');

router.get('/', BuildingsController.welcome);
router.post('/api/users/register', usersController.register);
router.post('/api/users/login', usersController.login);
router.get('/api/users/account', authenticateUser, usersController.account);

router.get('/', BuildingsController.welcome);
router.get('/api/buildings', authenticateUser, authorizeUser, BuildingsController.list);
router.post('/api/buildings', authenticateUser, authorizeUser, BuildingsController.create);
router.get('/api/buildings/:id', authenticateUser, authorizeUser, BuildingsController.show);
router.put('/api/buildings/:id', authenticateUser, authorizeUser, BuildingsController.update);
router.delete('/api/buildings/:id', authenticateUser, authorizeUser, BuildingsController.delete);

router.get('/', RoomsController.welcome);
router.get('/api/rooms', authenticateUser, authorizeUser, RoomsController.list);
router.post('/api/rooms', authenticateUser, authorizeUser, RoomsController.create);
router.get('/api/rooms/:id', authenticateUser, authorizeUser, RoomsController.show);
router.put('/api/rooms/:id', authenticateUser, authorizeUser, RoomsController.update);
router.delete('/api/rooms/:id', authenticateUser, authorizeUser, RoomsController.delete);

router.get('/', TenentsController.welcome);
router.get('/api/tenants', authenticateUser, authorizeUser, TenentsController.list);
router.post('/api/tenants', authenticateUser, authorizeUser, TenentsController.create);
router.get('/api/tenants/:id', authenticateUser, authorizeUser, TenentsController.show);
router.put('/api/tenants/:id', authenticateUser, authorizeUser, TenentsController.update);
router.delete('/api/tenants/:id', authenticateUser, authorizeUser, TenentsController.delete);

module.exports = router;