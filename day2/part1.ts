import { PuzzleInput } from "../utils/puzzle-input";

const puzzleInput = new PuzzleInput("day2/data.txt").process();

let safeCount = 0;

const isSafe = (levels: number[]): boolean => {
  const direction = directionCheck(levels);
  for (let i = 0; i < levels.length - 1; i++) {
    const curr = levels[i];
    const next = levels[i + 1];
    // If not all increasing or all decreasing, return early
    if (direction > 0 && curr > next) {
      return false;
    } else if (direction < 0 && curr < next) {
      return false;
    } else if (Math.abs(curr - next) < 1 || Math.abs(curr - next) > 3)
      return false;
  }
  return true;
};

const directionCheck = (levels: number[]) => {
  if (!levels[0] || !levels[1]) {
    throw new Error("Bad puzzle input!");
  }
  if (levels[0] > levels[1]) {
    // if negative, its decreasing
    return -1;
  } else {
    // if positive, its increasing
    return 1;
  }
};

for (const report of puzzleInput) {
  const levels = report.split(" ").map(Number);
  if (isSafe(levels)) {
    safeCount++;
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
