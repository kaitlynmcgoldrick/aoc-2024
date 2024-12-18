"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuildBadBook = void 0;
const part1_1 = require("./part1");
const puzzle_input_1 = require("../utils/puzzle-input");
const rules = new puzzle_input_1.PuzzleInput("day5/data-rules.txt").process();
const books = new puzzle_input_1.PuzzleInput("day5/data-pages.txt").process();
// Wrong Too High
// 6315
const rebuildBadBook = (pages, rankMap) => {
    return pages.sort((a, b) => {
        if (rankMap[a].rank < rankMap[b].rank) {
            return -1;
        }
        else if (rankMap[a].rank > rankMap[b].rank) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
};
exports.rebuildBadBook = rebuildBadBook;
const countRebuiltBooks = (books) => {
    let rebuiltBookSum = 0;
    for (let i = 0; i < books.length; i++) {
        const pages = books[i].split(",");
        const rankMap = (0, part1_1.buildRankMap)(rules, pages);
        let good = true;
        for (let j = 0; j < pages.length - 1; j++) {
            if (rankMap[pages[j]].rank > rankMap[pages[j + 1]].rank) {
                good = false;
            }
        }
        if (!good) {
            // console.log({ rankMap });
            const rebuiltBook = (0, exports.rebuildBadBook)(pages, rankMap);
            // console.log({ rebuiltBook });
            rebuiltBookSum += parseInt(rebuiltBook[Math.floor(rebuiltBook.length / 2)]);
        }
    }
    return rebuiltBookSum;
};
console.log(countRebuiltBooks(books));
//# sourceMappingURL=part2.js.map