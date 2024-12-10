"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const leftArray = [];
const rightMap = {};
node_fs_1.default.readFileSync("day1/data.txt", "utf8")
    .split("\n")
    .map((line) => {
    const [left, right] = line.split("   ");
    leftArray.push(parseInt(left));
    const rightInt = parseInt(right);
    if (rightMap[rightInt]) {
        rightMap[rightInt] += 1;
    }
    else {
        rightMap[rightInt] = 1;
    }
});
const similarityScore = leftArray.reduce((acc, curr) => {
    return acc + curr * (rightMap[curr] ? rightMap[curr] : 0);
}, 0);
console.log(similarityScore);
//# sourceMappingURL=part2.js.map