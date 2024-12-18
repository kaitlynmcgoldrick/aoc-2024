import { buildRankMap } from "./part1";
import { PuzzleInput } from "../utils/puzzle-input";

const rules = new PuzzleInput("day5/data-rules.txt").process();
const books = new PuzzleInput("day5/data-pages.txt").process();

// Wrong Too High
// 6315

export const rebuildBadBook = (pages, rankMap) => {
  return pages.sort((a, b) => {
    if (rankMap[a].rank < rankMap[b].rank) {
      return -1;
    } else if (rankMap[a].rank > rankMap[b].rank) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};

const countRebuiltBooks = (books) => {
  let rebuiltBookSum = 0;

  for (let i = 0; i < books.length; i++) {
    const pages = books[i].split(",");

    const rankMap = buildRankMap(rules, pages);
    let good = true;

    for (let j = 0; j < pages.length - 1; j++) {
      if (rankMap[pages[j]].rank > rankMap[pages[j + 1]].rank) {
        good = false;
      }
    }

    if (!good) {
      // console.log({ rankMap });
      const rebuiltBook = rebuildBadBook(pages, rankMap);
      // console.log({ rebuiltBook });
      rebuiltBookSum += parseInt(
        rebuiltBook[Math.floor(rebuiltBook.length / 2)]
      );
    }
  }
  return rebuiltBookSum;
};

console.log(countRebuiltBooks(books));
