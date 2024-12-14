"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_input_1 = require("../utils/puzzle-input");
const puzzleInput = new puzzle_input_1.PuzzleInput("day4/data.txt").process();
const crossword = puzzleInput.map((line) => line.split(""));
// start by brute forcing it
const traverseDown = (crossword, i, j) => {
    if (crossword[i + 1] &&
        crossword[i + 2] &&
        crossword[i + 3] &&
        crossword[i + 1][j] + crossword[i + 2][j] + crossword[i + 3][j] === "MAS") {
        return true;
    }
    return false;
};
// then generalize the brute force function
const traverse = (crossword, i, j, iTraverseMultiplier, jTraverseMultiplier) => {
    let iTraverses = 1;
    let jTraverses = 1;
    let maybeMasString = "";
    while (iTraverses < 4 && jTraverses < 4) {
        if (!crossword[i + iTraverses * iTraverseMultiplier])
            break;
        maybeMasString +=
            crossword[i + iTraverses * iTraverseMultiplier][j + jTraverses * jTraverseMultiplier];
        iTraverses++;
        jTraverses++;
    }
    if (maybeMasString === "MAS")
        return true;
    return false;
};
let numOfXmases = 0;
// i is row, j is column
for (let i = 0; i < crossword.length; i++) {
    for (let j = 0; j < crossword[0].length; j++) {
        if (crossword[i][j] === "X") {
            // traverse up
            if (traverse(crossword, i, j, -1, 0)) {
                numOfXmases++;
            }
            // traverse up and right
            if (traverse(crossword, i, j, -1, 1)) {
                numOfXmases++;
            }
            // traverse  right
            if (traverse(crossword, i, j, 0, 1)) {
                numOfXmases++;
            }
            // traverse  down and right
            if (traverse(crossword, i, j, 1, 1)) {
                numOfXmases++;
            }
            // traverse down
            if (traverse(crossword, i, j, 1, 0)) {
                numOfXmases++;
            }
            // traverse down and left
            if (traverse(crossword, i, j, 1, -1)) {
                numOfXmases++;
            }
            // traverse left
            if (traverse(crossword, i, j, 0, -1)) {
                numOfXmases++;
            }
            // traverse left and up
            if (traverse(crossword, i, j, -1, -1)) {
                numOfXmases++;
            }
        }
    }
}
console.log(numOfXmases);
//# sourceMappingURL=part1.js.map