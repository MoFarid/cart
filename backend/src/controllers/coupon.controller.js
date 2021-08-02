const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { couponService } = require('../services');

const create = catchAsync(async (req, res) => {
  const coupon = await couponService.create(req.body);
  res.status(httpStatus.CREATED).send(coupon);
});

const getByCode = catchAsync(async (req, res) => {
  const coupon = await couponService.getByCode(req.body.code);
  res.send(coupon);
});

const removeByCode = catchAsync(async (req, res) => {
  const coupon = await couponService.removeByCode(req.body.code);
  res.send(coupon);
});

module.exports = {
  create,
  getByCode,
  removeByCode,
};
