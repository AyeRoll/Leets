/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    var diff_nums = []; //  [numbers]
    var freq = []; // [frequency]
    var k_list = [];
    var ks = [];
    diff_nums.push(nums[0]);
    freq.push(1);
    for (var i = 1; i < nums.length; i++){
        var checker = diff_nums.indexOf(nums[i]);
        if (checker !== -1){
            freq[checker]++;
        }else{
            diff_nums.push(nums[i]);
            freq.push(1);
        }
    }
    for (var x = 0; x < freq.length; x++){
        if (k_list.length < k){
            k_list.push([diff_nums[x], freq[x]]);
            ks.push(diff_nums[x]);
        } else {
            var minIdx = 0;
            for (var f = 1; f < k_list.length; f++){
                if (k_list[f][1] < k_list[minIdx][1]){
                    minIdx = f;
                }
            }
            if (freq[x] > k_list[minIdx][1]){
                k_list[minIdx] = [diff_nums[x], freq[x]];
                ks[minIdx] = diff_nums[x];
            }
        }
    }
        
        // if(nums[i] === nums[i+1]){
            
        // }

        // if (current !== -1){
        //     current[1]++;
        // } else {
        //     freq.push([nums[i], 1]);
        // }
    
    freq.sort();
    // const final = [];
    return ks;

};
// @lc code=end
//console.log(topKFrequent([5,2,5,3,5,3,1,1,3], 2));

