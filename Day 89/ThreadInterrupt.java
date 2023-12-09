public class ThreadInterrupt {
    
    public static void main(String[] args) {
        Thread t1= new Thread(new simpleThread());
        t1.start();
        t1.interrupt();
    }
    static class simpleThread implements Runnable{
    @Override
    public void run()
    {
        System.out.println("I am running");
        for(int i=0;i<10;i++)
        {
            System.out.println(i);
            if(Thread.currentThread().isInterrupted())
            {
                System.out.println("I got Interrupted Signal but i will not stop me now ");
                System.out.println("\n i decided to stop now !!  \n");
                System.exit(0);
            }
            try{
            Thread.sleep(1000);
            }catch(InterruptedException e)
            {
                System.out.println(e.getCause());
            }
        }
    }
}


}
