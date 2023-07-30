const argv = require("yargs").argv;
const { creatFile } = require("./files");

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case "create":
      creatFile(fileName, content);
      break;

    case "":
      // ... id
      break;

    case "":
      // ... name email phone
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
