/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (36.91%)
 * Likes:    44056
 * Dislikes: 2159
 * Total Accepted:    8.8M
 * Total Submissions: 22.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without duplicate
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3. Note that "bca" and
 * "cab" are also correct answers.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   if (s.length > 0){
   const countList = [];
   for (let i = 0; i < s.length; i++){
      var endSub = false;
      let count = 0;
      var rmap = new Map();
      // for (let x = i; endSub != true; x++){
      //    rmap.has(s[x]) ? (endSub = true, countList.push(count)) : (rmap.set(s[x], x), count++);
      // }
      // rmap.has(undefined) ? countList[countList.length-1]-- : count=0;
      let x = i;
      while (!endSub){
         // console.log("Workeds, %s, %s", x, s[x]);
         // rmap.get(s[x]) ? () : ();
         if (rmap.has(s[x]) == true){
            endSub = true;
            countList.push(count);
         } else {
            rmap.set(s[x], x);
            count++;
         }
         x++;
      }
      rmap.has(undefined) ? countList[countList.length-1]-- : count=0;
   }
   countList.sort((a, b) => b-a);
   return countList[0];
   } else {return 0;}
};
// @lc code=end
console.log(lengthOfLongestSubstring("abcabcbb"));
