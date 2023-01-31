There is a sequence of words in CamelCase as a string of letters, $s$ , having the following properties:

* It is a concatenation of one or more words consisting of English letters.

* All letters in the first word are lowercase.

* For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given , determine the number of words in $s$.

**Example**
```
s = oneTwoThree
```

There are  words in the string: 'one', 'Two', 'Three'.

**Function Description**
Complete the camelcase function in the editor below.

camelcase has the following parameter(s):

* string $s$: the string to analyze

**Returns**
* int: the number of words in $s$

**Input Format**
A single line containing string $s$.

**Constraints**
$1 \leq length of s \leq $ $10$<sup>$5$</sup>

**Sample Input**
```saveChangesInTheEditor```

**Sample Output**
```5```

**Explanation**
String $s$ contains five words:

1. save
2. Changes
3. In
4. The
5. Editor