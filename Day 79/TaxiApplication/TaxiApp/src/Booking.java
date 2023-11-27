import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Booking {
    private static ArrayList<Taxi> taxiList= new ArrayList<>();
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
        Customer customer;
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

        
    }
    public static void ticketStatus()
    {
        System.out.println();
        System.out.println("Enter ur Ticket Id: ");
        int ticketId = input.nextInt();
        Ticket ticket = ticketMap.get(ticketId);
        if(ticket!=null)
        {
            System.out.println("------- Ticket Details -------");
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
            taxiList.add(temp);
        }

    }
    //displaying taxi
    public static void displayTaxiDetails()
    {
        System.out.println();
        System.out.println("<----------  Taxi Details --------------->");
        System.out.println("Taxi Id   CurrentLocation   Earnings");
        for(Taxi t : taxiList)
        {
            System.out.println(t.getId()+"                      "+t.getCurrentLocation()+"      "+t.getEarnings());
        }
        System.out.println();
    }
}
