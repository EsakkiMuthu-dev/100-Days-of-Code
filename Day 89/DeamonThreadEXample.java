public class DeamonThreadEXample {
    public static void main(String[] args) {

        Thread DeamonThread = new Thread(()->{
            for(int i=0;i<437893218;i++)
            {
                try {
                Thread.sleep(i);
                } catch (InterruptedException e) {
                    System.out.println("Interrupted");
                }
                
            }
            System.out.println("Daemon Thread Exiting....");
            
        });
        DeamonThread.setName("Daemonnnn!!!");
        DeamonThread.setDaemon(true);
        DeamonThread.start();
        System.out.println("Thread Started without deamon flag");
        System.out.println("Main Thread Exiting....");
    }
}
