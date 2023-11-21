public class Date implements Comparable<Date> {
    int day;
    int month;
    int year;
    public Date(String date)
    {
        //date = [09, 02, 2000]
        
        String[] d = date.split("/");
        day=Integer.parseInt(d[0]);
        month = Integer.parseInt(d[1]);
        year=Integer.parseInt(d[2]);    
    }

    public String toString()
    {
        return day+":"+month+":"+year;
    }

    public int compareTo(Date other)
    {
        // check year
        if(this.year!=other.year)
        {
            return Integer.compare(this.year,other.year);
        }
        //same year - month
        if(this.year==other.year && this.month !=other.month)
        {
            return Integer.compare(this.month, other.month);
        }
        //same year,month -> date
        if(this.year == other.year && this.month==other.month){
            return Integer.compare(this.day, other.day);
        }
        return 0;
    }
    

}
