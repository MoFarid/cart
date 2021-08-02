const express = require('express');
const validate = require('../../middlewares/validate');
const couponValidation = require('../../validations/coupon.validation');
const couponController = require('../../controllers/coupon.controller');

const router = express.Router();

router.post('/create', validate(couponValidation.create), couponController.create);
router.post('/check', validate(couponValidation.getByCode), couponController.getByCode);
router.post('/removeByCode', validate(couponValidation.removeByCode), couponController.removeByCode);

module.exports = router;
