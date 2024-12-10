"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const part2_try3_1 = require("./part2-try3");
describe("isReportSafe", () => {
    it("", () => {
        expect((0, part2_try3_1.isReportSafe)([7, 6, 4, 2, 1])).toEqual(true);
        expect((0, part2_try3_1.isReportSafe)([1, 2, 7, 8, 9])).toEqual(false);
        expect((0, part2_try3_1.isReportSafe)([9, 7, 6, 2, 1])).toEqual(false);
        expect((0, part2_try3_1.isReportSafe)([1, 3, 2, 4, 5])).toEqual(true);
        expect((0, part2_try3_1.isReportSafe)([8, 6, 4, 4, 1])).toEqual(true);
        expect((0, part2_try3_1.isReportSafe)([1, 3, 6, 7, 9])).toEqual(true);
        expect((0, part2_try3_1.isReportSafe)([27, 29, 30, 33, 34, 35, 37, 35])).toEqual(true);
    });
    it.only("special", () => {
        expect((0, part2_try3_1.isReportSafe)([60, 57, 58, 61, 63, 64])).toEqual(true);
    });
});
describe("buildDifferenceMatrix", () => {
    it("", () => {
        expect((0, part2_try3_1.buildDifferenceMatrix)([7, 6, 4, 2, 1])).toEqual([1, 2, 2, 1]);
        expect((0, part2_try3_1.buildDifferenceMatrix)([1, 2, 7, 8, 9])).toEqual([-1, -5, -1, -1]);
        expect((0, part2_try3_1.buildDifferenceMatrix)([1, 4, 2, 8, 9])).toEqual([-3, 2, -6, -1]);
        expect((0, part2_try3_1.buildDifferenceMatrix)([60, 57, 58, 61, 63, 64])).toEqual([
            3, -1, -3, -2, -1,
        ]);
    });
});
describe("evaluateDifferenceMatrix", () => {
    it("", () => {
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([1, 5, 2, 8, 9]))).toEqual([false, 0]);
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([7, 6, 4, 2, 1]))).toEqual([true, -1]);
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([1, 4, 2, 8, 9]))).toEqual([false, 2]);
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([60, 57, 58, 61, 63, 64]))).toEqual([false, 0]);
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([27, 29, 30, 33, 34, 35, 37, 35]))).toEqual([false, 6]);
        expect((0, part2_try3_1.evaluateDifferenceMatrix)((0, part2_try3_1.buildDifferenceMatrix)([27, 29, 30, 33, 34, 35, 37, 35]))).toEqual([false, 6]);
    });
});
//# sourceMappingURL=part2.test.js.map