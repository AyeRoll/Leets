/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//    const s_len = s.length;
   var s_list = s.split('');
   s_list.sort();
   const s_sort = s_list.join();
//    const t_len = t.length;
   var t_list = t.split('');
   t_list.sort();
   const t_sort = t_list.join();
   if (s_sort == t_sort){
        return true;
   } else {
        return false;
   }
   
};
// @lc code=end

// // Test the function
// console.log(isAnagram("anagram", "nagaram"));

