const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');

// Setup all routes here

router.get('/', siteController.homePage);

router.get('/bracket',siteController.bracketPage);

router.get('/selection', siteController.selectionPage);

router.get('/login', userController.loginForm);

router.get('/register', userController.registerForm);

router.post('/register',
  userController.validateRegister,
  userController.register
);

router.get('/users/me',
  userController.authenticate,
  userController.privateReq
);

module.exports = router;
