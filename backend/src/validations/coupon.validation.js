const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    code: Joi.string().required(),
    value: Joi.number().required(),
    isFixed: Joi.boolean(),
  }),
};

const getByCode = {
  body: Joi.object().keys({
    code: Joi.string().required(),
  }),
};

const removeByCode = getByCode;

module.exports = {
  create,
  getByCode,
  removeByCode,
};
