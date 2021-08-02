const Joi = require('joi');

const init = {};
const get = {};

const add = {
  body: Joi.object().keys({
    cartId: Joi.string().required(),
    itemData: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
    }),
  }),
};

const change = {
  body: Joi.object().keys({
    cartId: Joi.string().required(),
    itemIndex: Joi.number().integer().required(),
    itemData: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
    }),
  }),
};

const remove = {
  body: Joi.object().keys({
    cartId: Joi.string().required(),
    itemIndex: Joi.number().integer().required(),
  }),
};

const evaluate = {
  body: Joi.object().keys({
    cartId: Joi.string().required(),
  }),
};

module.exports = {
  init,
  get,
  add,
  remove,
  change,
  evaluate,
};
