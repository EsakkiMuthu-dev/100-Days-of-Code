class Solution {
    public int max(int[] arr)
    {
        int maxi = 0;
        for(int i=0;i<arr.length;i++)
        {
            maxi = Math.max(maxi,arr[i]);
        }
        return maxi;
    }
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) 
    {
        List<Boolean> res=new ArrayList<Boolean>(candies.length);
        int maxi = max(candies);
        for(int i=0;i<candies.length;i++)
        {
            res.add((candies[i]+extraCandies) >=maxi);
        }
        return res;
    }
}
