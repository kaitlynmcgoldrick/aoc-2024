import fs from "node:fs";

const leftArray = [];
const rightArray = [];

fs.readFileSync("day1/data.txt", "utf8")
  .split("\n")
  .map((line) => {
    const numbers = line.split("  ");
    leftArray.push(parseInt(numbers[0]));
    rightArray.push(parseInt(numbers[1]));
  });

const sortedLeftArray = leftArray.sort();
const sortedRightArray = rightArray.sort();

const difference = sortedLeftArray.reduce((acc, curr, i) => {
  return acc + Math.abs(curr - sortedRightArray[i]);
}, 0);

console.log(difference);

/**
 * what's bad
 * - I want the file processor in its own module
 * - We should be able to sort the the numbers in place as we import but I'm lazy
 *
 * what's good
 * - I like the reduce method implementation
 */
