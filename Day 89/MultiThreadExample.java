import java.util.Random;

public class MultiThreadExample{
    static final int MAX_PASSWORD = 9999999;
    static int password;
    public static void main(String[] args) {
        System.out.println("\n <-------- Lets start the police hacker race ---------> \n");
        generateRandomPassword();
        Thread hacker1= new Thread(()->{
            System.out.println(Thread.currentThread().getName()+"🏂 - Catch me if you can \n");
            int len = MultiThreadExample.MAX_PASSWORD;
            for(int i=0;i<len;i++)
            {
                if(i==password){
                      try{
                             Thread.sleep(1000);
                        }
                        catch(InterruptedException e)
                        {
                            System.out.println("got error "+e.getMessage());
                        }
                    System.out.println("\n UR System Got Hacked By Me 👾 - "+Thread.currentThread().getName());
                    System.exit(0);
                }
            }
        });
        hacker1.setName("Hacker Haiku");

        Thread hacker2 = new Thread(()->{
            System.out.println(Thread.currentThread().getName()+" 💻-  velai nu vantha na velakaaran da \n" );
            int len = MultiThreadExample.MAX_PASSWORD;
            for(int i=len;i>=0;i--)
            {

                if(i==password){
                      try{
                             Thread.sleep(1000);
                        }
                        catch(InterruptedException e)
                        {
                            System.out.println("got error "+e.getMessage());
                        }
                    System.out.println("\nUR System Got Hacked By Me 👾 - "+Thread.currentThread().getName());
                    System.exit(0);
                }
            }
        });
        hacker2.setName("Jackie Hackie");
        
        Thread police = new Thread(()->{
            System.out.println(Thread.currentThread().getName()+" 🦁 -  hackers na ongi aranja ondra ton weight da! \n");
            for(int i=10;i>0;i--)
            {
                System.out.println(i);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e)
                {
                    System.out.println("got error "+e.getMessage());
                }
                
            }
            System.out.println("\nYou hackers odunga da . I am Singam Police");
            System.exit(0);
        });
        police.setName("Singam");
        
        police.setPriority(Thread.MIN_PRIORITY);
        police.start();    
        hacker2.start();
        hacker1.start();
        
    }
    public static void generateRandomPassword()
    {
        Random rand = new Random();
        password=rand.nextInt(MAX_PASSWORD);
        System.out.println("password: "+password);
    }

    
    
}

