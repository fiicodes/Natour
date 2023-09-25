const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Review = require('./../models/reviewModel');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const review = await Review.find();

  res.status(200).json({
    status: 'success',
    result: review.length,
    data: {
      review,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const newreview = await Review.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      newreview,
    },
  });
});

exports.getReview = catchAsync(async (req, res, next) => {
  const review = await Review.find();
  // Tour.findOne({ _id: req.params.id })

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
});
