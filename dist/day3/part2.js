"use strict";
// xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
// xmul(234342432,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
// xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_input_1 = require("../utils/puzzle-input");
const puzzleInput = new puzzle_input_1.PuzzleInput("day3/data.txt").process();
let sum = 0;
let enabled = true;
for (const line of puzzleInput) {
    const stack = line.split("");
    while (stack.length > 0) {
        if (stack.slice(0, 7).join("") === "don't()") {
            enabled = false;
            stack.splice(0, 7);
        }
        if (stack.slice(0, 4).join("") === "do()") {
            enabled = true;
            stack.splice(0, 4);
        }
        let element = stack.shift();
        if (element === "m" &&
            stack[0] === "u" &&
            stack[1] === "l" &&
            stack[2] === "(") {
            let firstMultiplier = "";
            let secondMultiplier = "";
            let i = 3;
            while (stack[i] !== "," && parseInt(stack[i]) >= 0) {
                firstMultiplier += stack[i];
                i++;
            }
            if (stack[i] === ",") {
                i++;
            }
            while (stack[i] !== ")" && parseInt(stack[i]) >= 0) {
                secondMultiplier += stack[i];
                i++;
            }
            if (stack[i] === ")") {
                if (enabled) {
                    console.log(`${firstMultiplier} * ${secondMultiplier}`);
                    sum += parseInt(firstMultiplier) * parseInt(secondMultiplier);
                }
            }
        }
    }
}
console.log(sum);
//# sourceMappingURL=part2.js.map