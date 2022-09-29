const Joi = require('joi');

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const queryPaginationSchema = Joi.object({
  limit,
  offset,
});

module.exports = { queryPaginationSchema };
