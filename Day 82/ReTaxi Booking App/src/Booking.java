import java.util.HashMap;
import java.util.Scanner;

public class Booking {
    private static Scanner scanner=new Scanner((System.in));
    private static HashMap<Integer,Taxi> taxiMap=new HashMap<>();
    private static HashMap<Integer,Customer> customerMap=new HashMap<>();
    private static HashMap<Integer,Ticket> ticketMap=new HashMap<>();
    public static void main(String[] args) {
        createTaxi(4);
        System.out.println("\n-------------WELCOME TO BOOK TAXI---------\n");
        while(true){
            System.out.println("menu");
            System.out.println("1.Book ticket");
            System.out.println("2.Display taxi details");
            System.out.println("3.Ticket status");
            System.out.println("4.Quit");
            System.out.println("enter ur choice: ");
            int choice=scanner.nextInt();
            switch (choice) {
                case 1:
                    bookTicket();
                    break;
                case 2:
                    displayTaxiDetails();
                    break;
                case 3:
                    displayTicket();
                    break;
                case 4:
                    System.out.println("---thank you----");
                    return;
                default:
                System.out.println("\n---enter the correct choice-----\n");
                    break;
            }
        }
    }
    public static void bookTicket(){
        Customer customer=null;
        Taxi tax=null;
        System.out.println("\n-----welcome to book ticket----\n");
        System.out.println("are you new here(y/n)");
        char choice=scanner.next().charAt(0);
        if(choice!='Y'&& choice!='y'){
            System.out.println("enter ur id: ");
            int id=scanner.nextInt();
            if(customerMap.containsKey(id)){
                customer=customerMap.get(id);
                System.out.println("hi"+customer.getName());
            }else{
                System.out.println("invalid id");
                return;
            }
        }
        else{
            System.out.println("enter ur name: ");
            String name=scanner.next();
            customer=new Customer(name);
            customerMap.put(customer.getId(),customer);
            System.out.println("ur id is: "+customer.getId());
        }
        System.out.println("where to pick: ");
        char pick=scanner.next().charAt(0);
        System.out.println("where to drop: ");
        char drop=scanner.next().charAt(0);
        System.out.println("time to pick: ");
        int time=scanner.nextInt();
        tax=getTaxi(pick,time);

        int totalkms=Math.abs(pick-drop)*15;
        int amount=(totalkms-5)*10+100;
        System.out.println("the cost of travel: "+amount);
        System.out.println("do you want book:(y/n)");
        char choice2=scanner.next().charAt(0);
        if(choice2=='Y'||choice2=='y'){
            Ticket booking= new Ticket(pick, drop, time, tax, customer, amount);
            ticketMap.put(booking.getId(), booking);
            tax.updateEarning(amount);
            tax.updateFreeTime(Math.abs(pick-drop));
            tax.updateLocation(drop);
            System.out.println("successfully booked ,ur ticket id is "+booking.getId()+" happy travelling :)");
        }else{
            System.out.println("booking cancelled ");
        }
        
    }
    public static Taxi getTaxi(char pick,int time){
        Taxi ride=null;
        int minimum=Integer.MAX_VALUE;
        //pickloc=curloc low earned taxi
        //pickloc c7 d
        for(Taxi tt:taxiMap.values()){
            if(tt.location()==pick && tt.getEarning()<minimum){
                ride=tt;
                minimum=tt.getEarning();
            }
        }
        if(ride==null){
            int minimum2=Integer.MAX_VALUE;
            for(Taxi vv:taxiMap.values()){
                int travelTime=Math.abs(vv.location()-pick);
                int reachingTime=vv.freeTime()+travelTime;
                if(reachingTime<=time && vv.getEarning()<minimum2){
                    ride=vv;
                    minimum2=vv.getEarning();
                }
            }
        }

        return ride;
    }
    public static void displayTaxiDetails(){
        System.out.println("\n display taxi details");
        for(Taxi taxi:taxiMap.values()){
            System.out.println(taxi);
        }
    }
    public static void displayTicket(){
        System.out.println("enter the id: ");
        int id=scanner.nextInt();
        Ticket ticket=ticketMap.get(id);
        if(ticket==null){
            System.out.println("id not found");
        }else{
            System.out.println("\n----ticket details----\n");
            System.out.println("ticked id"+ticket.getId());
            System.out.println("customer name"+ticket.getCustomer().getName());
            System.out.println("taxi id"+ticket.getTaxi().getId());
            System.out.println("Ticket amount"+ticket.getAmount());
        }

    }
    public static void createTaxi(int n){
        for(int i=0;i<n;i++){
            Taxi taxi=new Taxi();
            taxiMap.put(taxi.getId(),taxi);
        }
    }
}
