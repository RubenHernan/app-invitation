const { Result } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.listResults = catchAsync(
  async (req, res) => {
    const { requestTime } = req;

    const results = await Result.findAll({
      order: [['createdAt', 'DESC']],
    });

    const totalResults = await Result.count();
    const totalAcceptedResults =
      await Result.count({
        where: {
          accepted: 1,
        },
      });

    res.status(200).json({
      status: 'success',
      message: 'The query has been done!',
      requestTime,
      results,
      totalResults,
      totalAcceptedResults,
    });
  }
);

exports.save = catchAsync(async (req, res) => {
  const { requestTime } = req;
  const {
    accepted,
    guests,
    namesGuests,
    dietaryReq,
    contactName,
    contactPhone,
    contactEmail,
  } = req.body;
  const result = await Result.create({
    accepted,
    guests,
    namesGuests,
    dietaryReq,
    contactName,
    contactPhone,
    contactEmail,
  });

  res.status(201).json({
    status: 'success',
    message: 'The result has been stored!',
    requestTime,
    result,
  });
});
