const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(4).max(20).required(),
  email: Joi.string().email().min(6).max(255).required(),
  pwd: Joi.string().min(8).required(),
}).options({ abortEarly: false });

const registerValidation = (data) => {
  return schema.validate(data);
};
module.exports = registerValidation;
