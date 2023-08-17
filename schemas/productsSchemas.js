const Joi = require("joi");

const addSchema = Joi.object({
  price: Joi.number().required(),
  name: Joi.string().required(),
  avatar: Joi.string().required(),
});

module.exports = {
  addSchema,
};
