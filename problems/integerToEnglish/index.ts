/**
 * Convert a non-negative integer num to its English words representation.

 

Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 

Constraints:

0 <= num <= 231 - 1

   Hide Hint #1  
Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.
   Hide Hint #2  
Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.
   Hide Hint #3  
There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)

 */


const lessThan20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion"];

function numberToWords(num: number): string {
  if (num === 0) return "Zero";
  let i = 0;
  let words = "";

  while (num > 0) {
    if (num % 1000 !== 0) {
       words = helper(num % 1000) + thousands[i] + " " + words;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return words.trim();
}

function helper(num: number): string {
  if (num === 0) {
    return "";
  } else if (num < 20) {
    return lessThan20[num] + " ";
  } else if (num < 100) {
    return tens[Math.floor(num / 10)] + " " + helper(num % 10);
  } else {
    return lessThan20[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
  }
}

console.log(numberToWords(123000000));