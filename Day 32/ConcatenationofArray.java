class Solution {
    public int[] getConcatenation(int[] nums) {
        int n =nums.length;
        int[] ans = new int[2*n];
        int m =n;
        for(int i =0 ;i< n;i++){

            ans[i] = nums[i];
            ans[m] = nums[i];
            m++;

        }
        return ans;
    }
}
