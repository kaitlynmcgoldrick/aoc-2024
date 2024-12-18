"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_input_1 = require("../utils/puzzle-input");
const part2_1 = require("./part2");
const part1_1 = require("./part1");
const rules = new puzzle_input_1.PuzzleInput("day5/data-rules.txt").process();
describe("rebuildBadBook", () => {
    it("should work", () => {
        const rankMap = (0, part1_1.buildRankMap)(rules, ["75", "97", "47", "61", "53"]);
        expect((0, part2_1.rebuildBadBook)(["75", "97", "47", "61", "53"], rankMap)).toEqual([
            "97",
            "75",
            "47",
            "61",
            "53",
        ]);
    });
    it("should work", () => {
        const rankMap = (0, part1_1.buildRankMap)(rules, ["61", "13", "29"]);
        expect((0, part2_1.rebuildBadBook)(["61", "13", "29"], rankMap)).toEqual([
            "61",
            "29",
            "13",
        ]);
    });
    it("should work", () => {
        const rankMap = (0, part1_1.buildRankMap)(rules, ["97", "13", "75", "29", "47"]);
        expect((0, part2_1.rebuildBadBook)(["97", "13", "75", "29", "47"], rankMap)).toEqual([
            "97",
            "75",
            "47",
            "29",
            "13",
        ]);
    });
    it.only("should work", () => {
        const rankMap = (0, part1_1.buildRankMap)(rules, ["63", "48", "85", "67", "38"]);
        expect((0, part2_1.rebuildBadBook)(["63", "48", "85", "67", "38"], rankMap)).toEqual([
            "85",
            "67",
            "63",
            "38",
            "48",
        ]);
    });
});
//# sourceMappingURL=part2.test.js.map