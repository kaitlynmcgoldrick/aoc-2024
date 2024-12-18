import { buildRankMap } from "./part1";
[
  "75|53",
  "29|13",
  "97|29",
  "53|29",
  "61|53",
  "97|53",
  "61|29",
  "47|13",
  "75|47",
  "97|75",
  "47|61",
  "75|61",
  "47|29",
  "75|13",
  "53|13",
];
describe("buildRankMap", () => {
  it("should work", () => {
    const rankMap = {};

    buildRankMap(rankMap, [
      "47|53",
      "12|67",
      "53|12",
      "97|13",
      "97|61",
      "97|47",
      "75|29",
      "61|13",
      "75|53",
    ]);
    expect(rankMap["53"].rank).toEqual(2);
    expect(rankMap["12"].rank).toEqual(3);
    expect(rankMap["67"].rank).toEqual(4);
  });
  it("should work", () => {
    const rankMap = {};

    buildRankMap(rankMap, [
      "47|53",
      "12|67",
      "53|12",
      "97|13",
      "97|61",
      "97|47",
      "61|13",
      "75|53",
    ]);
    expect(rankMap["53"].rank).toEqual(2);
    expect(rankMap["12"].rank).toEqual(3);
    expect(rankMap["67"].rank).toEqual(4);
  });
  it("should work", () => {
    const rankMap = {};

    buildRankMap(rankMap, ["54|56", "78|54", "56|78"]);
    expect(rankMap["53"].rank).toEqual(2);
    expect(rankMap["12"].rank).toEqual(3);
    expect(rankMap["67"].rank).toEqual(4);
  });
});
