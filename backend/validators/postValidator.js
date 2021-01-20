const Joi = require("@hapi/joi");

const schema = Joi.object({
  title: Joi.string().min(4).required(),
  body: Joi.string().min(12).required(),
}).options({ abortEarly: false });

const postValidation = (data) => {
  return schema.validate(data);
};
module.exports = postValidation;
