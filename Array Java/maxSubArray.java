class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        for(int i = 1; i < nums.length; i++){
            nums[i] = Math.max(0, nums[i - 1]) + nums[i];
            if(nums[i] > maxSum){
                maxSum = nums[i];
            }
        }
        return maxSum;
    }
}