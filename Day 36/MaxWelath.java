class Solution {
    public int maximumWealth(int[][] accounts) {
        int maxAmount= Integer.MIN_VALUE; 
        int sum;
        for(int[] amount:accounts)
        {
            sum=0;
            for(int n: amount) sum+=n;
        
            if(sum>maxAmount) maxAmount= sum;
            
        }
        return maxAmount;
    }
}
