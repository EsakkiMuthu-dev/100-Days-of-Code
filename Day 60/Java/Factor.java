public class Factor implements Comparable<Factor> {
    int count;
    int val;

    public Factor(int count,int val)
    {
        this.count=count;
        this.val=val;
    }
    public String toString()
    {
        return val +"";
    }

    public int  compareTo(Factor other){
        return Integer.compare(other.count , this.count);
    }
}
