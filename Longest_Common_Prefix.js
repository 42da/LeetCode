/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let stopFlag = false;
    let strIdx = 0;
    let answer = "";
    
    while (!stopFlag) {
        let tempStr = strs[0][strIdx];
        if (tempStr) answer += tempStr;
        else break;
        
        for (let i = 1; i < strs.length; i++) {
            if (!strs[i][strIdx] || answer[strIdx] != strs[i][strIdx]) {
                stopFlag = true;
                answer = answer.substring(0, strIdx);
                break;
            }
        }
        strIdx == 199 && (stopFlag = true);
        strIdx++;
    }
    return answer;

    /*  solution
    strs = strs.sort(); // sort by lexicographical order
    let answer = "";
    let firstStr = strs[0];
    let lastStr = strs[strs.length - 1];

    for (let i = 0; i < Math.min(firstStr.length, lastStr.length); i++) {   // 문자열을 정렬하면 뒤로 갈 수록 공통된 문자열이 적어지기 때문에
                                                                            // 첫번째 문자열과 마지막 문자열만 비교하면 된다.
        if (firstStr[i] == lastStr[i]) answer += firstStr[i];
        else return answer;
    }
    return answer;
     */
};