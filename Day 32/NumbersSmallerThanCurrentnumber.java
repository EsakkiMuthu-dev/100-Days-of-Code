
class Solution {

    public int[] smallerNumbersThanCurrent(int[] nums) {
        //Count bucket Sort
        // Count array to store the counts of each value 
        
        int[] count = new int[102];

        // add the counts of the elements to its index in count arr
        for(int num:nums) count[num]++;

        // create cummulative frequency of the sum in count array
        int sum=0;
        for(int i =1 ;i<102;i++)
        {
        
   
            count[i]+=count[i-1];
        }

        // all are set then add the new values to the nums

        for(int i =0;i<nums.length;i++)
        {
            if (nums[i] == 0) nums[i] =0;
            else nums[i] = count[nums[i]-1]; // we are trying to get cummulative frequency of that value stored in our count array
        }
        return nums;
    // Brute Force Approach -O(N*2)
        // int n = nums.length;
        // int[] temp = new int[n];
        // int count;
        // for(int i=0;i<n;i++)
        // {
        //     count =0;
        //     for(int j=0;j<n;j++)
        //     {
        //         if(nums[i] >nums[j]) count++;
                
        //     }
        //     temp[i] =count;

        // }
        // return temp;
        
    }
}
