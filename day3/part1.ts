// xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
// xmul(234342432,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))

// put it into an array (stack)
// if element doesn't equal to an m shift it off
// if element does equal m, see if the next 3 are ul(
// parse until you find an , and then create an integer
// then parse until you find an )
// remove that from the stack

import { PuzzleInput } from "../utils/puzzle-input";

const puzzleInput = new PuzzleInput("day3/data.txt").process();

let sum = 0;

for (const line of puzzleInput) {
  const stack = line.split("");
  while (stack.length > 0) {
    let element = stack.shift();
    if (element !== "m") continue;

    if (stack[0] === "u" && stack[1] === "l" && stack[2] === "(") {
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
        console.log(`${firstMultiplier} * ${secondMultiplier}`);
        sum += parseInt(firstMultiplier) * parseInt(secondMultiplier);
      }
    }
  }
}

console.log(sum);
