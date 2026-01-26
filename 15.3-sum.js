/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (37.04%)
 * Likes:    34864
 * Dislikes: 3236
 * Total Accepted:    5.5M
 * Total Submissions: 14.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: 
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a - b);
  const result = [];

  for (let i = 0; i <= nums.length - 3; i++){
    // checks for dupes
    if (i > 0 && nums[i] === nums[i-1]) continue;
    // if i > 0 cant equal zero
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right){
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0){
        result.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++; 
      else right--;
    }
  }
return result;
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]));