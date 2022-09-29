const Joi = require('joi');

const { createUserSchema } = require('./user.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema,
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
  // user: updateUserSchema,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};

// const createCustomerSchema = Joi.object({
//   name: name.required(),
//   lastName: lastName.required(),
//   phone: phone.required(),
//   userId: userId.required(),
// });

// const updateCustomerSchema = Joi.object({
//   name: name,
//   lastName: lastName,
//   phone: phone,
// });

// const getCustomerSchema = Joi.object({
//   id: id.required(),
// });
