const express = require('express');

//middlewares
const userMiddleware = require('./../Middlewares/user.middleware');
const validations = require('./../Middlewares/validations.middleware');

//controllers
const resultController = require('../Controllers/result.controller');

const router = express.Router();

router
  .route('/')
  .get(
    userMiddleware.protect,
    resultController.listResults
  )
  .post(
    validations.resultsValidation,
    resultController.save
  );

module.exports = router;
