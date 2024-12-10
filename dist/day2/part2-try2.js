"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_input_1 = require("../utils/puzzle-input");
const puzzleInput = new puzzle_input_1.PuzzleInput("day2/test.txt").process();
let safeCount = 0;
// 660 part 1
// 676 too low?
// 686 wrong
// 687 wrong
// 688 wrong
// 703 too high
const isSafe = (levels) => {
    let direction;
    for (let i = 0; i < levels.length - 1; i++) {
        const curr = levels[i];
        const next = levels[i + 1];
        const newDirection = directionCheck(curr, next);
        if (direction && direction != newDirection) {
            // direction changed
            return [false, i];
        }
        // // handle bad first number case
        // const nextNext = levels[i + 2];
        // if (i === 0 && nextNext && newDirection != directionCheck(next, nextNext)) {
        //   return [false, i];
        // }
        if (Math.abs(curr - next) < 1 || Math.abs(curr - next) > 3) {
            return [false, i];
        }
        direction = newDirection;
    }
    return [true, -1];
};
const directionCheck = (num1, num2) => {
    if (!num1 || !num2) {
        throw new Error("Bad puzzle input!");
    }
    if (num1 > num2) {
        // if negative, its decreasing
        return -1;
    }
    else {
        // if positive, its increasing
        return 1;
    }
};
let count = 0;
for (const report of puzzleInput) {
    if (count < 10) {
        console.log("%%%%%");
    }
    const levels = report.split(" ").map(Number);
    const [result, index] = isSafe(levels);
    if (result) {
        // console.log({ levels });
        safeCount++;
        continue;
    }
    else {
        // console.log({ index });
        const copy1 = levels.slice();
        const copy2 = levels.slice();
        copy1.splice(index, 1);
        // console.log(copy1);
        const [result] = isSafe(copy1);
        if (result) {
            safeCount++;
            continue;
        }
        else {
            copy2.splice(index + 1, 1);
            // console.log(copy2);
            const [result] = isSafe(copy2);
            if (result) {
                safeCount++;
                continue;
            }
            else {
                count++;
                if (count < 10) {
                    console.log(levels);
                    console.log(copy1);
                    console.log(copy2);
                }
            }
        }
    }
}
console.log(safeCount);
/**
 * what's good
 * - seperation into smaller functions
 * - good naming
 *
 * what's bad
 * - directionCheck relies on the first 2 numbers but if we can't rely on those then that logic needs to change
 */
//# sourceMappingURL=part2-try2.js.map