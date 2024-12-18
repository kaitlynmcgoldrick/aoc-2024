Two data structures

1. Linked List to store the relationships
2. Key value store of rank

47, 0 -> 53, 1

97 -> 13
-> 61
-> 47 -> 53

47 -> [53]
97 -> [13, 61, 47]

97:0
61:1
13:1
53:1
47:1

75 -> 29

47:a
53:b
97:a
13:b
61:b

/\*\*

- Key value store
- Go down the ordering rules, for the first number, add the second number to the value
- if the second value already exists, also add its array to the value
  \*/

// 47|53
// 97|13
// 97|61
// 97|47
// 75|29
// 61|13
// 75|53
// 29|13
// 97|29
// 53|29
// 61|53
// 97|53
// 61|29
// 47|13
// 75|47
// 97|75
// 47|61
// 75|61
// 47|29
// 75|13
// 53|13

// 75,47,61,53,29
// 97,61,53,29,13
// 75,29,13
// 75,97,47,61,53
// 61,13,29
// 97,13,75,29,47

47:53,
97:13,61,47,53
75:29
61:
