/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++){
        var x = 1;
        for (x; x<nums.length; x++){
            if (i === x){
                try {x++;}catch{err;}
            }
            var added = nums[i] + nums[x];
            if (added === target){
                return [i, x];
            }
        }
    }

    
};
// @lc code=end

// console.log(twoSum([2,7,11,15], 9));