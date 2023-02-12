class Solution {
    public int[] runningSum(int[] nums) {
        int sum =nums[0];
        int n =nums.length;
        for(int i =0;i<n;i++)
        {
            nums[i] =sum;
            if(i < n-1)
            {
                 sum+=nums[i+1];
            }
           
        }
        return nums;
    }
}
