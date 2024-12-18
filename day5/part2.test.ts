import { PuzzleInput } from "../utils/puzzle-input";
import { rebuildBadBook } from "./part2";
import { buildRankMap } from "./part1";

const rules = new PuzzleInput("day5/data-rules.txt").process();

describe("rebuildBadBook", () => {
  it("should work", () => {
    const rankMap = buildRankMap(rules, ["75", "97", "47", "61", "53"]);
    expect(rebuildBadBook(["75", "97", "47", "61", "53"], rankMap)).toEqual([
      "97",
      "75",
      "47",
      "61",
      "53",
    ]);
  });
  it("should work", () => {
    const rankMap = buildRankMap(rules, ["61", "13", "29"]);
    expect(rebuildBadBook(["61", "13", "29"], rankMap)).toEqual([
      "61",
      "29",
      "13",
    ]);
  });
  it("should work", () => {
    const rankMap = buildRankMap(rules, ["97", "13", "75", "29", "47"]);
    expect(rebuildBadBook(["97", "13", "75", "29", "47"], rankMap)).toEqual([
      "97",
      "75",
      "47",
      "29",
      "13",
    ]);
  });
  it.only("should work", () => {
    const rankMap = buildRankMap(rules, ["63", "48", "85", "67", "38"]);
    expect(rebuildBadBook(["63", "48", "85", "67", "38"], rankMap)).toEqual([
      "85",
      "67",
      "63",
      "38",
      "48",
    ]);
  });
});
