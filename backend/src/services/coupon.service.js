const httpStatus = require('http-status');
const { Coupon } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a coupon
 * @param {Object} couponBody
 * @returns {Promise<Coupon>}
 */
const create = async (couponBody) => {
  return Coupon.create(couponBody);
};

/**
 * Get coupon by code
 * @param {string} code
 * @returns {Promise<Coupon>}
 */
const getByCode = async (code) => {
  const coupon = await Coupon.findOne({ code });
  if (!coupon) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Coupon not found');
  }
  return coupon;
};

/**
 * Delete user by id
 * @param {string} code
 * @returns {Promise<Coupon>}
 */
const removeByCode = async (code) => {
  const coupon = await getByCode(code);
  return Coupon.findByIdAndRemove(coupon.id);
};

module.exports = {
  create,
  getByCode,
  removeByCode,
};
