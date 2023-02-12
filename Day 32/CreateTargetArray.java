class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        int n = nums.length;
        ArrayList<Integer> arr =new ArrayList<>(n);
        int[] target = new int[n];
        for(int i=0;i<n;i++)
        {
            arr.add(index[i],nums[i]);
        }

        // convert arrayList to int[]
        for(int i=0;i<n;i++)
        {
            target[i] = arr.get(i);
        }
       
        return target;
    }   
}
