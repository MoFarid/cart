const { Cart } = require('../models');

/**
 * Init a cart
 * @returns {Promise<Cart>}
 */
const init = async () => {
  return Cart.create({});
};

/**
 * Get a cart by cartId
 * @param {String} cartId
 * @returns {Promise<Cart>}
 */
const get = async (cartId) => {
  const cart = await Cart.findById(cartId);
  console.log(cart);
  return cart;
};

/**
 * Add an item
 * @param {String} cartId
 * @param {Object} itemData
 * @returns {Promise<Cart>}
 */
const add = async (cartId, itemData) => {
  return applyToCart(cartId, (cart) => cart.items.push(itemData));
};

/**
 * Change an item by index
 * @param {String} cartId
 * @param {String} itemIndex
 * @param {Object} itemData
 * @returns {Promise<Cart>}
 */
const change = async (cartId, itemIndex, itemData) => {
  return applyToCart(cartId, (cart) => (cart.items[itemIndex] = itemData));
};

/**
 * Remove an item
 * @param {String} cartId
 * @param {Object} itemData
 * @returns {Promise<Cart>}
 */
const remove = async (cartId, itemIndex) => {
  return applyToCart(cartId, (cart) => cart.items.splice(itemIndex, 1));
};

/**
 * Apply a callback on the cart specified by cartId and then save
 * @param {String} cartId
 * @param {Function} callback
 * @returns {Promise<Cart>}
 */
const applyToCart = async (cartId, callback) => {
  const cart = await get(cartId);
  callback(cart);
  cart.save();
  return cart;
};

/**
 * Evaluate the total cost of cart after applying discounts
 * @param {String} cartId
 * @param {Number} fixedValueDiscount
 * @param {Number} percentageDiscount
 * @returns {Promise<Cart>}
 */
const evaluate = async (cartId, fixedValueDiscount, percentageDiscount) => {
  const cart = await get(cartId);
  let amount = cart.items.map((item) => item.price).reduce((previous, current) => previous + current, 0);
  amount *= 1 - percentageDiscount;
  amount -= fixedValueDiscount;
  return amount;
};

module.exports = {
  init,
  get,
  add,
  change,
  remove,
  evaluate,
};
