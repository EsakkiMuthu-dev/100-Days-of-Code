public class CounterExample implements Runnable {
    SharedCounter counter;
    public CounterExample(SharedCounter counter)
    {
        this.counter=counter;
    }
    @Override
    public void run()
    {
        for(int i=0;i<1000;i++)
        {
            this.counter.incrementCounter();
        }
    }

    public static void main(String[] args) {
        SharedCounter counter = new SharedCounter();

        // Your code here for creating and starting two threads
        // your code here for creating and starting t...
        CounterExample c1 = new CounterExample(counter);
        CounterExample c2 = new CounterExample(counter);
        // Your code here for waiting for threads to finish
        // ...
        Thread t1 = new Thread(c1);
        Thread t2 = new Thread(c2);
        t1.start();
        t2.start();
        try{
            t1.join();
            t2.join();
        }catch(Exception e)
        {
            System.out.println("Got Error "+ e);
        }

        System.out.println("Final Counter Value: " + counter.getCount());
    }

    static class SharedCounter {
        private int count = 0;

        // Your code here for synchronized increment method
        // ...
        public synchronized void incrementCounter()
        {
            this.count+=1;
        }

        public int getCount() {
            return count;
        }
    }
}