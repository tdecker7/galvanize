# galvanize
Repo for Galvanize application. [Project Euler #22](https://projecteuler.net/problem=22) solution. 

## Problem Description
>Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin >by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its >alphabetical position in the list to obtain a name score.
>
>For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th >name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
>
>What is the total of all the name scores in the file?

## Solution Walkthrough

1. Using Node's asynchronous readFile, I read the names.txt file into a buffer. 
2. I convert the buffer to a string, remove the double quotes, and split by the commas in the file.
3. The list is sorted using JavaScript's native sort.
4. The item's alphabetical position (`sortVal`) is calculated by the position + 1 to give a positive value.
5. The item's alphabetical value (`alphaVal`) is calculated by summing the ASCII code minus 65 to give it a positive value
6. The value of the word is calculated by multiplying `sortVal` and `alphaVal`.
7. Then the entire value of the word is added to the sum (`total`)
8. Once all words are iterated through, the sum total is logged to the console.
