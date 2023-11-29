import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Booking {
     private static HashMap<Integer,Taxi> taxiMap = new HashMap<>();
    private static HashMap<Integer,Ticket> ticketMap = new HashMap<>();
    private static HashMap<Integer,Customer> customerMap = new HashMap<>();
    private static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        
        createTaxi(4);
        // displayTaxiDetails();
        System.out.println("----------- Welcome to Taxi Booking Application -----------------");
        while (true) {
            System.out.println(" Menu  ");
            System.out.println("1.Book Ticket ");
            System.out.println("2.Ticket Status");
            System.out.println("3.Taxi Details ");
            System.out.println("4.Quit \n ");
            System.out.println("Enter ur Choice: ");
            int choice = input.nextInt();

            switch (choice) {
                case 1:
                    bookTicket();
                    break;
                case 2:
                    ticketStatus();
                    break;
                case 3:
                    displayTaxiDetails();
                    break;
                case 4:
                    System.out.println("Thank you for Using our Application");
                    return;
                       
                default:
                    System.out.println("Invalid option");
                    break;
            }
            System.out.println("-------------------------------- \n\n");
        }

    }
    public static void bookTicket()
    {
        System.out.println("\n ------------- Welcome to booking --------- \n");
        System.out.println("Are u already have account (Y/N): ");
        char choice = input.next().charAt(0);
        Customer customer = null;
        if(choice=='Y'|| choice=='y')
        {
            System.out.println("Enter ur Customer Id: ");
            int id = input.nextInt();
            if(customerMap.containsKey(id))
            {
                customer =customerMap.get(id);
                System.out.println("Hi "+customer.getName());

            }else{
                System.out.println("Invalid Cutomer Id ");
            }
        }else{
            System.out.println("\n Creating new Customer  \n");
            System.out.println("Enter ur name: ");
            
            String name = input.next();
            customer = new Customer(name);
            System.out.println("Please note ur id "+customer.getId());
            customerMap.put(customer.getId(), customer);
        } 

        System.out.println("\n where can i pick up you: \n");
        char pickup=input.next().charAt(0);
        System.out.println("\n where can i drop you\n");
        char drop=input.next().charAt(0);
        System.out.println("\nTell me time to pickup\n");
        int pickupTime=input.nextInt();
        Taxi t1=getTaxi(pickup, pickupTime);
        if(t1==null){
            System.out.println("\n no taxi found \n");
            return;
        }
        int amount=0;
        int distance=(drop-pickup)*15;
        distance=distance-5;
        amount=amount+100;
        amount=amount+(distance*10);
        System.out.println("\ntotal amount for this trip: "+amount+"\n");
        System.out.println("\n do you want to contiue booking(y/n): ");
        char c=input.next().charAt(0);
        if(c=='y'||c=='Y'){
            System.out.println("Ticket Booked!!");
            // public Ticket(int amount,int pickUpTime,Customer customer,
            // // Taxi taxi,char dropingPoint,char pickUpPoint){
            //    public Ticket(char pickUpPoint,char dropPoint,Customer customer,Taxi taxi,int amount,int pickUpTime)
  
            Ticket tec=new Ticket(pickup,drop,customer,t1,amount,pickupTime);
            ticketMap.put(tec.getId(), tec);
            System.out.println("ur id is"+tec.getId());
            System.out.println("\n <-------------------------->\n");
            t1.updateEarnings(amount);
            t1.setCurrentLocation(drop);
            int travelTime= Math.abs(t1.getCurrentLocation()-pickup);
            t1.updateFreeTime(travelTime);
            
        }else{
            System.out.println("can't proceed further");
        }

        
    }
    
    public static Taxi getTaxi(char pickUpPoint, int pickUpTime) {
        Taxi nearestTaxiWithLowestEarnings = null;
        int minDistance = Integer.MAX_VALUE;
    
        // Check for taxis at the pickup location with the lowest earnings
        for (Taxi taxi : taxiMap.values()) {
            if (taxi.getCurrentLocation() == pickUpPoint && taxi.getEarnings() < minDistance) {
                nearestTaxiWithLowestEarnings = taxi;
                minDistance = taxi.getEarnings();
            }
        }
    
        // If no taxi is available at the pickup location, find the nearest taxi that can reach on time
        if (nearestTaxiWithLowestEarnings == null) {
            int minTimeToReach = Integer.MAX_VALUE;
    
            for (Taxi taxi : taxiMap.values()) {
                int timeToReach = calculateTimeToReach(taxi.getCurrentLocation(), pickUpPoint);
                if (canReachByTime(taxi, pickUpPoint, pickUpTime) && timeToReach < minTimeToReach) {
                    nearestTaxiWithLowestEarnings = taxi;
                    minTimeToReach = timeToReach;
                }
            }
        }
    
        return nearestTaxiWithLowestEarnings;
    }
    
    // Helper method to calculate time to reach from current location to pickup point
    private static int calculateTimeToReach(char currentLocation, char pickUpPoint) {
        return Math.abs(currentLocation - pickUpPoint); // Assuming 60 minutes to travel between adjacent points
    }
    
    // Add this method to the Booking class
    private static boolean canReachByTime(Taxi taxi, char pickUpPoint, int pickUpTime) {
        int travelTime = Math.abs(taxi.getCurrentLocation() - pickUpPoint); // Assuming 60 minutes to travel between adjacent points
        int currentTime = taxi.getFreeTime() ; // Assuming all taxis start at 6 pm

        return currentTime + travelTime <= pickUpTime;
    }



    
    public static void ticketStatus()
    {
        System.out.println();
        System.out.println("Enter ur Ticket Id: ");
        int ticketId = input.nextInt();
        Ticket ticket = ticketMap.get(ticketId);
        if(ticket!=null)
        {
            System.out.println("\n\n ------- Ticket Details -------");
            System.out.println("Ticket Id: "+ticket.getId());
            System.out.println("Customer Name "+ ticket.getCustomer().getName());
            System.out.println("Taxi Id "+ ticket.getTaxi().getId());
            System.out.println("Total Fair: "+ ticket.getAmount());

        }else{
            System.out.println("Invalid Ticket Id");
        }


    }
    public static void createTaxi(int n)
    {
        for(int i=0;i<n;i++)
        {
            Taxi temp = new Taxi();
            taxiMap.put(temp.getId(),temp);
        }

    }
    //displaying taxi
    public static void displayTaxiDetails()
    {
        System.out.println();
        System.out.println("<----------  Taxi Details --------------->");
        System.out.println("Taxi Id   CurrentLocation   Earnings");
        for(Taxi t : taxiMap.values())
        {
            System.out.println(t.getId()+"                      "+t.getCurrentLocation()+"      "+t.getEarnings());
        }
        System.out.println();
    }
}
