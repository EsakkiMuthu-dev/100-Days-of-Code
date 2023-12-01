public class Taxi {
    private static int count=1;
    private int id;
    private int earning;
    private char location;
    private int freeTime;
    public Taxi(){
        this.id=count;
        count++;
        this.earning=0;
        this.location='A';
        this.freeTime=6;
    }
    public String toString(){
        return this.id+" "+this.earning+" "+this.location+" "+this.freeTime;
    }
    public int getId(){
        return this.id;
    }
    public int getEarning(){
        return this.earning;
    }
    public char location(){
        return this.location;
    }
    public int freeTime(){
        return this.freeTime;
    }
    public void updateEarning(int amount){
        this.earning=this.earning+amount;
    }
    public void updateLocation(char newLocation){
        this.location=newLocation;
    }
    public void updateFreeTime(int duration){
        this.freeTime=this.freeTime+duration;
    }
}
