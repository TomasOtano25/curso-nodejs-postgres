const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const productId = Joi.number().integer();
const products = Joi.array([productId]);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  products: products,
});

const updateOrderSchema = Joi.object({
  customerId: customerId,
  // user: updateUserSchema,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
};
