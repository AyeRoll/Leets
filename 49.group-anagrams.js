/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    strs.sort();
    var final = [];
    var anagrams = [];
    for (var i = 0; i < strs.length; i++){
        var temp = strs[i];
        var single_str = temp.split('').sort().join('');
        var anagram_check = anagrams.indexOf(single_str);
        if(anagram_check !== -1){
            final[anagram_check].push(temp);
        } else {
            final.push([temp]);
            anagrams.push(single_str);
        }
    }
    final.sort((a,b) => a.length - b.length);
    

return final;
};
// @lc code=end

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
