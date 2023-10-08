const {
  body,
  validationResult,
} = require('express-validator');

const validFields = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: error.mapped(),
    });
  }
  next();
};

//Validating user

exports.loginUserValidation = [
  body('login')
    .notEmpty()
    .withMessage('User is required!'),
  body('password')
    .notEmpty()
    .withMessage('Password is required!'),
  validFields,
];

//validating results

exports.resultsValidation = [
  body('accepted')
    .notEmpty()
    .withMessage('Status is required!'),
  body('guests')
    .notEmpty()
    .withMessage('Nro of guests is required!')
    .isInt()
    .withMessage('Must be a number!'),
  body('namesGuests')
    .notEmpty()
    .withMessage('Name of guests is required!'),
  validFields,
];
