// 3. Longest Substring Without Repeating Characters
// Runtime: 128 ms, faster than 53.85% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {    // brute force
    var n = s.length;
    var ans = 0;
    if (n == 1) {
        ans = 1; return ans; 
    }
    
    for (var i = 0; i < n; i++) {
        var tempAns = 0;
        for (var j = i; j < n + 1; j++) {
            if (i == j) {
                continue;
            }
            var tempS = s.substring(i, j - 1);
            if (tempS.indexOf(s.charAt(j - 1)) == -1) {
                tempAns += 1;
                ans = tempAns > ans ? tempAns: ans;
            } else break;
        }
    }
    return ans;
};