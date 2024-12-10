"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReportSafe = exports.evaluateDifferenceMatrix = exports.buildDifferenceMatrix = void 0;
const puzzle_input_1 = require("../utils/puzzle-input");
const puzzleInput = new puzzle_input_1.PuzzleInput("day2/data.txt").process();
let safeCount = 0;
const buildDifferenceMatrix = (levels) => {
    const differenceMatrix = [];
    for (let i = 0; i < levels.length - 1; i++) {
        differenceMatrix.push(levels[i] - levels[i + 1]);
    }
    return differenceMatrix;
};
exports.buildDifferenceMatrix = buildDifferenceMatrix;
const evaluateDifferenceMatrix = (diffMatrix) => {
    const indicesOfNegatives = [];
    const indicesOfPositives = [];
    for (let i = 0; i < diffMatrix.length; i++) {
        if (Math.abs(diffMatrix[i]) > 3 || diffMatrix[i] === 0) {
            return [false, i];
        }
        if (diffMatrix[i] < 0) {
            indicesOfNegatives.push(i);
        }
        if (diffMatrix[i] > 0) {
            indicesOfPositives.push(i);
        }
    }
    // this won't work if the length of levels is 1 or 0
    if (indicesOfNegatives.length === 1) {
        return [false, indicesOfNegatives.pop()];
    }
    if (indicesOfPositives.length === 1) {
        return [false, indicesOfPositives.pop()];
    }
    if (indicesOfNegatives.length === 0) {
        return [true, -1];
    }
    if (indicesOfPositives.length === 0) {
        return [true, -1];
    }
    return [false, -1];
};
exports.evaluateDifferenceMatrix = evaluateDifferenceMatrix;
const isReportSafe = (levels) => {
    const [isSafe, index] = (0, exports.evaluateDifferenceMatrix)((0, exports.buildDifferenceMatrix)(levels));
    if (isSafe) {
        return true;
    }
    if (index >= 0) {
        const copy1 = levels.slice();
        copy1.splice(index, 1);
        const [isCopy1Safe] = (0, exports.evaluateDifferenceMatrix)((0, exports.buildDifferenceMatrix)(copy1));
        if (isCopy1Safe) {
            return true;
        }
        const copy2 = levels.slice();
        copy2.splice(index + 1, 1);
        const [isCopy2Safe] = (0, exports.evaluateDifferenceMatrix)((0, exports.buildDifferenceMatrix)(copy2));
        if (isCopy2Safe) {
            return true;
        }
    }
    return false;
};
exports.isReportSafe = isReportSafe;
for (const report of puzzleInput) {
    const levels = report.split(" ").map(Number);
    if ((0, exports.isReportSafe)(levels)) {
        safeCount++;
    }
}
console.log(safeCount);
//# sourceMappingURL=part2-try3.js.map