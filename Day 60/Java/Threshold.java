public class Threshold {
    /*
3. Given an array and a threshold value find the o/p
eg) i/p {5,8,10,13,6,2};threshold = 3;
o/p count = 17
explanation:
Number parts: 

*/
    public static void main(String[] args) {
        int[] arr ={5,8,10,13,6,2};
        int threshold =3;
        thresholdM(arr,threshold);
    }
     public static void thresholdM(int[] arr , int threshold)
     {
        int count=0;
        for(int i=0;i<arr.length;i++)
        {
           int val = arr[i]/threshold; //  9/3 = 3 => 10/3 = 3 
            count= count+val;
            int rem = arr[i]%threshold;
            if(rem>0) count+=1;      
        }
        System.out.println(count);
     }
}
