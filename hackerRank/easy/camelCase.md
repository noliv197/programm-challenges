There is a sequence of words in CamelCase as a string of letters, , having the following properties:

* It is a concatenation of one or more words consisting of English letters.

* All letters in the first word are lowercase.

* For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given , determine the number of words in _s_.

**Example**
_s = oneTwoThree_

There are  words in the string: 'one', 'Two', 'Three'.

**Function Description**

Complete the camelcase function in the editor below.

camelcase has the following parameter(s):

* string _s_: the string to analyze

**Returns**

* int: the number of words in _s_

**Input Format**

A single line containing string _s_.

**Constraints**
```1 <= length of s <= 10**5```

**Sample Input**

```saveChangesInTheEditor```

**Sample Output**

```5```

**Explanation**

String _s_ contains five words:

1. save
2. Changes
3. In
4. The
5. Editor