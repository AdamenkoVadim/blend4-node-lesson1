const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const dataValidey = require("./helpers/datavalidator");

const creatFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };
  const result = dataValidey(file);
};

module.exports = { creatFile };
