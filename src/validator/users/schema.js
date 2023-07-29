const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().allow('admin', 'user').only().required(),
});

module.exports = { UserPayloadSchema };
