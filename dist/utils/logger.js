"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const outputLog = node_fs_1.default.createWriteStream("./outputLog.log");
const errorsLog = node_fs_1.default.createWriteStream("./errorsLog.log");
// export const logger = new console.Console(outputLog, errorsLog);
exports.logger = {
    info: (message) => "noop",
};
//# sourceMappingURL=logger.js.map