"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuzzleInput = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
class PuzzleInput {
    constructor(filename) {
        this.filename = filename;
    }
    process() {
        return node_fs_1.default.readFileSync(this.filename, "utf8").split("\n");
    }
}
exports.PuzzleInput = PuzzleInput;
//# sourceMappingURL=index.js.map