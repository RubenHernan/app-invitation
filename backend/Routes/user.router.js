const express = require('express');

//middlewares
const validations = require('./../Middlewares/validations.middleware');

//controllers
const userController = require('../Controllers/user.controller');

const router = express.Router();

router.post(
  '/login',
  validations.loginUserValidation,
  userController.login
);

module.exports = router;
