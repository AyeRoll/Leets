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
    const num_len = len(nums);

    while (twice == false && i < num_len){
        var y = i + 1;
        while(y < num_len && twice == false){
            if(nums[i] = nums[y]) {
                twice = true;
            } else {
                y += 1;
            }
        }
        i++;
    }
    return twice;
    
};
// @lc code=end

