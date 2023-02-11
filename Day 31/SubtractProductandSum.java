class Solution {
    public int subtractProductAndSum(int n) {
        
        int sum=0,product=1,rem;

        while(n>0)
        {
            rem = n%10;
            sum+=rem;
            product*=rem;
            n/=10;
        }
        return product - sum;
    }
}
