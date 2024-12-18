"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = [];
        this.rank = null;
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map