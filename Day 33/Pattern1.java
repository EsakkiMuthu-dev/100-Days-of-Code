
class Solution {

    void printSquare(int n) {
        // code here
        StringBuilder stars = new StringBuilder();
        
        // create stars depends upon input
        for(int i=0;i<n;i++) stars.append("* ");
        
        // print those stars
        for(int i=0;i<n;i++)
        {
            System.out.println(stars);
        }
        
    }
}
