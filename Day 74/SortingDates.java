import java.util.ArrayList;

public class SortingDates {
    public static void main(String[] args) {
        String[] dates={"09/02/2000","12/07/2001","12/05/1996","07/09/1998","13/07/2001","11/07/2001"};
        ArrayList<Date> dateList= new ArrayList<>();
        for(String date:dates)
        {
            dateList.add(new Date(date));
        }
        dateList.sort(null);
        System.out.println(dateList);
        
    }
}
