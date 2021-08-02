const { Coupon } = require('../models');

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
  return Coupon.findOne({ code });
};

/**
 * Delete user by id
 * @param {string} code
 * @returns {Promise<Coupon>}
 */
const removeByCode = async (code) => {
  const coupon = await getByCode(code);
  console.log(coupon);
  return Coupon.findByIdAndRemove(coupon.id);
};

module.exports = {
  create,
  getByCode,
  removeByCode,
};
