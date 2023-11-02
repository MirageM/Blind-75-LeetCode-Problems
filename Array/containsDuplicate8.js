/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mp = new Set(nums)
    return mp.size !== nums.length
};