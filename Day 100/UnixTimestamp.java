import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
public class UnixTimestamp {
    public static void main(String[] args) {
        long unixTimestamp =1702613315793L;
        Date convertedDate = new Date(unixTimestamp);
        System.out.println(convertedDate);
        Instant instant = Instant.ofEpochMilli(unixTimestamp);
        ZoneId zid = ZoneId.systemDefault();
        ZonedDateTime time = ZonedDateTime.ofInstant(instant,zid);
        System.out.println(time);
    }
}
