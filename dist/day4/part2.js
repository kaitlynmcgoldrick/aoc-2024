"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_input_1 = require("../utils/puzzle-input");
const puzzleInput = new puzzle_input_1.PuzzleInput("day4/data.txt").process();
const crossword = puzzleInput.map((line) => line.split(""));
const traverseDiagonalDownRight = (crossword, i, j) => {
    return (crossword[i - 1][j - 1] + crossword[i][j] + crossword[i + 1][j + 1] ===
        "MAS");
};
const traverseDiagonalUpRight = (crossword, i, j) => {
    return (crossword[i + 1][j - 1] + crossword[i][j] + crossword[i - 1][j + 1] ===
        "MAS");
};
const traverseDiagonalDownLeft = (crossword, i, j) => {
    return (crossword[i - 1][j + 1] + crossword[i][j] + crossword[i + 1][j - 1] ===
        "MAS");
};
const traverseDiagonalUpLeft = (crossword, i, j) => {
    return (crossword[i + 1][j + 1] + crossword[i][j] + crossword[i - 1][j - 1] ===
        "MAS");
};
// .M.S
// ..A.
// .M.S
// .M.M
// ..A.
// .S.S
// .S.M
// ..A.
// .S.M
// .S.S
// ..A.
// .M.M
let numOfXmases = 0;
// i is row, j is column
for (let i = 0; i < crossword.length; i++) {
    for (let j = 0; j < crossword[0].length; j++) {
        if (crossword[i][j] === "A" && crossword[i - 1] && crossword[i + 1]) {
            const diagonalDownRight = traverseDiagonalDownRight(crossword, i, j);
            const diagonalUpRight = traverseDiagonalUpRight(crossword, i, j);
            const diagonalDownLeft = traverseDiagonalDownLeft(crossword, i, j);
            const diagonalUpLeft = traverseDiagonalUpLeft(crossword, i, j);
            if (diagonalDownRight && diagonalUpRight) {
                numOfXmases++;
            }
            if (diagonalDownRight && diagonalDownLeft) {
                numOfXmases++;
            }
            if (diagonalUpRight && diagonalUpLeft) {
                numOfXmases++;
            }
            if (diagonalDownLeft && diagonalUpLeft) {
                numOfXmases++;
            }
        }
    }
}
console.log(numOfXmases);
//# sourceMappingURL=part2.js.map