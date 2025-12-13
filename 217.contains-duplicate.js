/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var i = 0;
    var twice = false;
    var num_list = nums.sort();
    const num_len = num_list.length;

    for (i; i<num_len; i++){
        if(num_list[i] == num_list[i+1]){
            twice = true;
            break;
        }
    }
    return twice;
    
};
// @lc code=end

