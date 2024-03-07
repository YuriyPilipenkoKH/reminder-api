const Joi = require("joi");
const { emailRegexp } = require("../helpers");

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string()
  });
  module.exports = registerSchema