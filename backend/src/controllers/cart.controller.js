const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { cartService } = require('../services');

const init = catchAsync(async (req, res) => {
  const cart = await cartService.init();
  res.status(httpStatus.CREATED).send({ cart });
});

const get = catchAsync(async (req, res) => {
  const cart = await cartService.get(req.body.cartId);
  res.send({ cart });
});

const add = catchAsync(async (req, res) => {
  const cart = await cartService.add(req.body.cartId, req.body.itemData);
  res.send({ cart });
});

const change = catchAsync(async (req, res) => {
  const cart = await cartService.change(req.body.cartId, req.body.itemIndex, req.body.itemData);
  res.send({ cart });
});

const remove = catchAsync(async (req, res) => {
  const cart = await cartService.remove(req.body.cartId, req.body.itemIndex);
  res.send({ cart });
});

const evaluate = catchAsync(async (req, res) => {
  const amount = await cartService.evaluate(req.body.cartId, req.body.fixedValueDiscount, req.body.percentageDiscount);
  res.send({ amount });
});

module.exports = {
  init,
  get,
  add,
  remove,
  change,
  evaluate,
};
