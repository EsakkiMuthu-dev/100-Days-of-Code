public class Ticket {
    private static int count=1;
    private int id;
    private char pickUpPoint;
    private char dropPoint;
    private int pickUpTime;
    private Taxi taxi;
    private Customer customer;
    private int amount;
    public Ticket(char pickUpPoint,char dropPoint,int pickUpTime,Taxi taxi,Customer customer,int amount){
        this.id=count;
        count++;
        this.pickUpPoint=pickUpPoint;
        this.dropPoint=dropPoint;
        this.pickUpTime=pickUpTime;
        this.taxi=taxi;
        this.customer=customer;
        this.amount=amount;
    }
    public int getId(){
        return this.id;
    }
    public char getPickUpPoint(){
        return this.pickUpPoint;
    }
    public char getDropPoint(){
        return this.dropPoint;
    }
    public int getPickUpTime(){
        return this.pickUpTime;
    }
    public Taxi getTaxi(){
        return this.taxi;
    }
    public Customer getCustomer(){
        return this.customer;
    }
    public int getAmount(){
        return this.amount;
    }
}
