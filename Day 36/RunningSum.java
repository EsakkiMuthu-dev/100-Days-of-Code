class Solution {
 

    public int[] runningSum(int[] nums) {
        
        // naive approach
        // int[] ans = new int[nums.length];
        // int sum;
        // for(int i =0; i<nums.length;i++)
        // {
        //     sum=0;
        //     for(int j=0;j<=i;j++)
        //     {
        //         sum+=nums[j];
        //     }
        //     ans[i] =sum;

        // }

        // best approach
        for(int i=1;i<nums.length;i++)
        {
            nums[i] += nums[i-1];
        }
       return nums;
    }
}
