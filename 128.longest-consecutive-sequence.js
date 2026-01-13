/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  nums = nums.sort((a,b) => a-b);
  let count = 1;
  let countList = [];
  if (nums.length > 1){
  for (let x = 0; x < nums.length; x++){
    if (nums[x+1] === nums[x]+1){
      count++;
    }else if(x + 1 == nums.length){
      countList.push(count);
      count=1;
    } else if(nums[x] == nums[x+1]){
      count == count;
    } else if(count > 1 & nums[x+1] !== nums[x]+1){
      countList.push(count);
      count=1;
    } 
  }
}else if(nums.length == 1){ return 1; }
else{ return 0; }
countList.sort((a,b) => a-b);
return countList[countList.length - 1];
};
// @lc code=end
