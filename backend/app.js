const express = require('express');
const cors = require('cors');

const usersRoutes = require('./Routes/user.router');
const resultsRoutes = require('./Routes/result.router');
const globalErrorHandler = require('./Controllers/error.controller');
const AppError = require('./utils/appErrors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users',usersRoutes);
app.use('/api/results',resultsRoutes);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;