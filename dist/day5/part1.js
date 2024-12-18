"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRankMap = void 0;
const linked_list_1 = require("../utils/linked-list");
const puzzle_input_1 = require("../utils/puzzle-input");
const logger_1 = require("../utils/logger");
const rules = new puzzle_input_1.PuzzleInput("day5/data-rules.txt").process();
// Wrong too low
// 3806
// Right
// 4996
const updateNexts = (rankMap, secondNode) => {
    if (secondNode.next.length === 0) {
        return;
    }
    logger_1.logger.info(`Next array ${JSON.stringify(secondNode.next)}`);
    // All of the next node's ranks must be bumped
    for (let j = 0; j < secondNode.next.length; j++) {
        const nextNode = secondNode.next[j];
        if (nextNode.rank <= secondNode.rank) {
            nextNode.rank = secondNode.rank + 1;
            updateNexts(rankMap, nextNode);
        }
        logger_1.logger.info("Updating nexts");
        logger_1.logger.info(`${nextNode.value} gets rank ${nextNode.rank}`);
    }
};
const buildRankMap = (rules, pages) => {
    const pagesSet = new Set(pages);
    const rankMap = {};
    for (let i = 0; i < rules.length; i++) {
        const [first, second] = rules[i].split("|");
        if (!pagesSet.has(first) || !pagesSet.has(second)) {
            continue;
        }
        if (rankMap[first] === undefined && rankMap[second] === undefined) {
            logger_1.logger.info("Both are undefined");
            const firstNode = new linked_list_1.ListNode(first);
            const secondNode = new linked_list_1.ListNode(second);
            firstNode.next.push(secondNode);
            rankMap[firstNode.value] = firstNode;
            firstNode.rank = 0;
            logger_1.logger.info(`${first} gets rank ${firstNode.rank}`);
            rankMap[secondNode.value] = secondNode;
            secondNode.rank = firstNode.rank + 1;
            logger_1.logger.info(`${second} gets rank ${secondNode.rank}`);
        }
        else if (rankMap[first] === undefined) {
            logger_1.logger.info("Only first is undefined");
            const firstNode = new linked_list_1.ListNode(first);
            const secondNode = rankMap[second];
            firstNode.next.push(secondNode);
            rankMap[firstNode.value] = firstNode;
            firstNode.rank = 0;
            logger_1.logger.info(`${first} gets rank ${firstNode.rank}`);
            if (secondNode.rank === 0) {
                secondNode.rank++;
                logger_1.logger.info(`${second} gets rank ${secondNode.rank}`);
                updateNexts(rankMap, secondNode);
            }
        }
        else if (rankMap[second] === undefined) {
            logger_1.logger.info("Only second is undefined");
            const firstNode = rankMap[first];
            const secondNode = new linked_list_1.ListNode(second);
            firstNode.next.push(secondNode);
            logger_1.logger.info(`${first} stays at rank ${firstNode.rank}`);
            rankMap[second] = secondNode;
            secondNode.rank = rankMap[first].rank + 1;
            logger_1.logger.info(`${second} gets rank ${secondNode.rank}`);
        }
        else {
            logger_1.logger.info("None are undefined");
            const firstNode = rankMap[first];
            const secondNode = rankMap[second];
            firstNode.next.push(secondNode);
            logger_1.logger.info(`${first} stays at rank ${firstNode.rank}`);
            logger_1.logger.info(`${first} rank is ${firstNode.rank} and ${second} rank is ${secondNode.rank}`);
            if (secondNode.rank <= firstNode.rank) {
                secondNode.rank = firstNode.rank + 1;
                logger_1.logger.info(`${second} gets rank ${secondNode.rank}`);
            }
            else {
                logger_1.logger.info(`${second} stays at rank ${secondNode.rank}`);
            }
            updateNexts(rankMap, secondNode);
        }
    }
    return rankMap;
};
exports.buildRankMap = buildRankMap;
const books = new puzzle_input_1.PuzzleInput("day5/data-pages.txt").process();
const countGoodBookSum = (books) => {
    let goodBookSum = 0;
    for (let i = 0; i < books.length; i++) {
        const pages = books[i].split(",");
        const rankMap = (0, exports.buildRankMap)(rules, pages);
        let good = true;
        for (let j = 0; j < pages.length - 1; j++) {
            if (rankMap[pages[j]].rank > rankMap[pages[j + 1]].rank) {
                good = false;
                break;
            }
        }
        if (good) {
            goodBookSum += parseInt(pages[Math.floor(pages.length / 2)]);
        }
    }
    return goodBookSum;
};
// 75,47,61,53,29
// 97,61,53,29,13
// 75,29,13
// 75,97,47,61,53
// 61,13,29
// 97,13,75,29,47
// console.log(countGoodBookSum(books));
//# sourceMappingURL=part1.js.map