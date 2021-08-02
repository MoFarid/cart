const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const couponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
    },
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
couponSchema.plugin(toJSON);
couponSchema.plugin(paginate);

/**
 * @typedef Coupon
 */
const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
