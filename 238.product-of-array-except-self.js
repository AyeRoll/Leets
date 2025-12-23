/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   var product = 1;
   var zero = [];
   var out = [];
//    var zero_index = [];
//    while (zero_index != -1){
//         zero.push(zero_index)
//    }
    var e = -1; 
   while ((e = nums.indexOf(0, e + 1)) !== -1) {
    zero.push(e);
    }
   for (var i = 0;i<nums.length;i++){
        if (nums[i] !== 0){
            product *= nums[i];
        }  
   } 
   for (var x = 0; x<nums.length;x++){
        if (nums[x] !== 0 && zero.length === 0){
            var except = product / nums[x];
            out.push(except);
        } else if (nums[x] === 0 && zero.length === 1){
            out.push(product);
         } else{
            out.push(0);
        } 
   }
   return out;
};
// @lc code=end


// console.log(productExceptSelf([-1,1,0,-3,3]));