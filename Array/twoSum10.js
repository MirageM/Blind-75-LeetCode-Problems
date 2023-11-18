/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(mp.has(complement)){
            return [i, mp.get(complement)]
        }
        mp.set(nums[i], i)
    }
};