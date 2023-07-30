const Joi = require("joi");

function dataValidey(data) {
  const schema = Joi.object({
    fileName: Joi.string().required(),
    content: Joi.string().required(),
  });
  return schema.validate(data);
}
module.exports = dataValidey;
