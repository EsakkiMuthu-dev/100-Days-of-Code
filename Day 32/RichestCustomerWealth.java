class Solution {
    public int sum(int[] arr)
    {
        int n =arr.length;
        int sum =0;
        for(int i =0;i<n;i++)
        {
            sum+=arr[i];
        }
        return sum;
    }
    public int maximumWealth(int[][] accounts) {
        int maxi = 0;
        for(int[] ar:accounts)
        {
            maxi=Math.max(maxi,sum(ar));
        }
        return maxi;
    }
}
