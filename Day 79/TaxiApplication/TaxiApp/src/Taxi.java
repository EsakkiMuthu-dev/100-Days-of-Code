
public class Taxi{
    private static int count=1;
    private int id;
    private int earnings;
    private char currentLocation;
    private int freetime;
    
    public Taxi()
    {
        // id auto generate
        this.id=count;
        count++;
        earnings=0;
        currentLocation='A';
        freetime=6;
    }
    public int getFreeTime()
    {
        return this.freetime;
    }
    public int getId()
    {
        return this.id;
    }

    public int getEarnings()
    {
        return this.earnings;
    }

    public char getCurrentLocation()
    {
        return this.currentLocation;
    }

    public void setCurrentLocation(char newLocation)
    {
        this.currentLocation=newLocation;
    }

    public void updateEarnings(int amount)
    {
        this.earnings = this.earnings+amount;
    }
    public void updateFreeTime(int travelTime)
    {
        this.freetime = this.freetime+travelTime;
    }
    @Override
    public String toString()
    {
        return  this.id+" "+ this.currentLocation+" "+this.earnings;
    }

}