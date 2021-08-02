const express = require('express');
const validate = require('../../middlewares/validate');
const cartValidation = require('../../validations/cart.validation');
const cartController = require('../../controllers/cart.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/init', validate(cartValidation.init), cartController.init);
router.get('/get', validate(cartValidation.get), cartController.get);
router.post('/add', validate(cartValidation.add), cartController.add);
router.post('/change', validate(cartValidation.change), cartController.change);
router.post('/remove', validate(cartValidation.remove), cartController.remove);

module.exports = router;
