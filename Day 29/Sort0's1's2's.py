class Solution:

    def swap(self,arr,start,end):
        arr[start],arr[end] = arr[end],arr[start]
    
    def sortColors(self,arr: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Dutch National Flag Algorithm

        low=mid=0
        high = len(arr)-1


        while mid <=high:
            match arr[mid]:

                #  if  mid is 0
                case 0:
                    self.swap(arr,low,mid)
                    low+=1
                    mid+=1

                # if mid is 1
                case 1:
                    mid+=1
                
                # if mid is 2
                case 2:
                    self.swap(arr,mid,high)
                    high-=1






        # Count Sort
        # freq = { 0:0,1:0,2:0}
        # for i in arr:
        #     freq[i]+=1
    
        # i=0
        # for val,count in freq.items():
        #     for k in range(count):
        #         arr[i] = val
        #         i+=1
