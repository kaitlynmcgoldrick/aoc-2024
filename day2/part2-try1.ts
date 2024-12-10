import { PuzzleInput } from "../utils/puzzle-input";

const puzzleInput = new PuzzleInput("day2/data.txt").process();

let safeCount = 0;

const doChecks = (num1, num2, direction, nextDirection) => {
  if (direction && direction != nextDirection) {
    return false;
  }
  // If not all increasing or all decreasing, return early
  if (direction > 0 && num1 > num2) {
    return false;
  } else if (direction < 0 && num1 < num2) {
    return false;
  } else if (Math.abs(num1 - num2) < 1 || Math.abs(num1 - num2) > 3) {
    return false;
  }
  return true;
};

//1 3 2 4 5
const isReportSafe = (levels: number[]): boolean => {
  let direction;
  for (let i = 0; i < levels.length; i++) {
    // do curr and next
    const curr = levels[i]; //1
    const next = levels[i + 1];
    if (!next) {
      return true;
    }
    // direction changed
    const nextDirection = directionCheck(curr, next);
    const firstChecks = doChecks(curr, next, direction, nextDirection);

    if (firstChecks) {
      direction = nextDirection;
    }

    if (!firstChecks) {
      const nextNext = levels[i + 1];
      if (!nextNext) {
        return true;
      }
      const nextNextDirection = directionCheck(curr, nextNext);
      const secondChecks = doChecks(
        curr,
        nextNext,
        direction,
        nextNextDirection
      );
      if (!secondChecks) {
        return false;
      } else {
        direction = nextDirection;
      }
    }
  }

  return true;
};

const directionCheck = (num1, num2) => {
  if (!num1 || !num2) {
    throw new Error("Bad puzzle input!");
  }
  if (num1 > num2) {
    // if negative, its decreasing
    return -1;
  } else {
    // if positive, its increasing
    return 1;
  }
};

for (const report of puzzleInput) {
  const levels = report.split(" ").map(Number);
  if (isReportSafe(levels)) {
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
