export class ListNode {
  value: string;
  next: ListNode[];
  rank: number;
  constructor(value) {
    this.value = value;
    this.next = [];
    this.rank = null;
  }
}

export class LinkedList {
  head: ListNode;
  constructor(head = null) {
    this.head = head;
  }
}
