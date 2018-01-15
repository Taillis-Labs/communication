const Joi = require('joi');

module.exports = {
  // POST /users
  createObject: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
    },
  },
};
