/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

function strStr(haystack: string, needle: string): number {
let Output = -1;
let firstLetter = needle[0];
let lastLetter = needle[needle.length - 1];

let firstLetterIndex = haystack.indexOf(firstLetter);
let lastLetterIndex = haystack.indexOf(lastLetter);
if(lastLetterIndex != needle.length-1)
{
    return Output;
}
else
{
    Output = firstLetterIndex
    for(let i = firstLetterIndex; i <= lastLetterIndex; i++)
    {
       if(haystack[i] != needle[i - firstLetterIndex])
       {
           Output = -1;
           break;
       }
    }

}

return Output;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1