import fs from "node:fs";

const outputLog = fs.createWriteStream("./outputLog.log");
const errorsLog = fs.createWriteStream("./errorsLog.log");

// export const logger = new console.Console(outputLog, errorsLog);

export const logger = {
  info: (message) => "noop",
};
