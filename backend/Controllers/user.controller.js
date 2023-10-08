const { User } = require('../models');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appErrors');

exports.login = catchAsync(
  async (req, res, next) => {
    const { login, password } = req.body;
    const user = await User.findOne({
      where: {
        login: login.toLowerCase(),
      },
    });

    if (!user) {
      return next(
        new AppError('Invalid credentials', 422)
      );
    }

    if (
      !(await bcrypt.compare(
        password,
        user.password
      ))
    ) {
      return next(
        new AppError('Invalid credentials', 422)
      );
    }

    const token = await generateJWT(user.id);

    res.status(200).json({
      status: 'success',
      token,
      user: {
        id: user.id,
        name: user.name,
        login: user.login,
      },
    });
  }
);
