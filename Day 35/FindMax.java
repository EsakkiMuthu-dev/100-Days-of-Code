public class Practice {

    public static void findMax(int a, int b, int c)
    {
        // int max =Integer.MIN_VALUE;
        // int min = Integer.MAX_VALUE;
        int max,min;

        if(a>b && a>c)
        {
            max=a;
        }else if(b>a && b>c)
        {
            max =b;
        }else{
            max=c;
        }

        if(a<b && a<c)
        {
            min=a;
        }else if(b<a && b<c)
        {
            min =b;
        }else{
            min=c;
        }

        System.out.println("Max Value is "+max +". Min value is "+min+".");
    }
    public static void findMaxArr(int[] arr)
    {
        int min=Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for(int n: arr)
        {
            if(n > max)
            {
                max=n;
            } 
            if(n < min)
            {
                min= n;
            }
        }
        System.out.println("Max Value is "+max +". Min value is "+min+".");
    }

    public static void main(String[] args) {
        findMax(2,34,78);
        int[] nums={2,34,78,45,90,23,45};
        findMaxArr(nums);
    }
}
