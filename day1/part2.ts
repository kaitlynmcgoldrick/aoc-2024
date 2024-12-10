import fs from "node:fs";

const leftArray = [];
const rightMap = {};

fs.readFileSync("day1/data.txt", "utf8")
  .split("\n")
  .map((line) => {
    const [left, right] = line.split("   ");
    leftArray.push(parseInt(left));
    const rightInt = parseInt(right);
    if (rightMap[rightInt]) {
      rightMap[rightInt] += 1;
    } else {
      rightMap[rightInt] = 1;
    }
  });

const similarityScore = leftArray.reduce((acc, curr) => {
  return acc + curr * (rightMap[curr] ? rightMap[curr] : 0);
}, 0);

console.log(similarityScore);
