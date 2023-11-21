public class LargestSubSequence {
    /*
     *Given an array of integers, find the length of the longest continuous increasing
            subsequence.
            Sample Input:
            [1, 3, 5, 4, 7]
            Sample Output:
            3

     * 
     */
    public static void main(String[] args) {
        int[] arr ={1, 3, 5, 4, 7};
        largestSubSequence(arr);
    }
    public static void largestSubSequence(int[] arr)
    {
        int start=0;
        int end=1;
        int pointer=start;
        int maxLength =0;
        while (end<arr.length) {
            if(arr[pointer]<=arr[end])
            {
                pointer++;
                end++;
            }else{
                int windowLength =end-start;
                if(windowLength > maxLength){
                    maxLength=windowLength;
                }
                start++;
                pointer=start;
                end=pointer+1;
            }
            
        }
        System.out.println(maxLength);
    }
    
}
