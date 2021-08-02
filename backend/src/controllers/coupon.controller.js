const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { couponService } = require('../services');

const create = catchAsync(async (req, res) => {
  const coupon = await couponService.create(req.body);
  res.status(httpStatus.CREATED).send(coupon);
});

const getByCode = catchAsync(async (req, res) => {
  const coupon = await couponService.getByCode(req.body.code);
  if (!coupon) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Coupon not found');
  }
  res.send(coupon);
});

const removeByCode = catchAsync(async (req, res) => {
  console.log(req.body);
  const coupon = await couponService.removeByCode(req.body.code);
  res.send(coupon);
});

module.exports = {
  create,
  getByCode,
  removeByCode,
};
