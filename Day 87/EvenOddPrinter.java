public class EvenOddPrinter {
    public static void main(String[] args) {
        NumberPrinter printer = new NumberPrinter();

        Thread evenThread = new Thread(() -> printer.printEven());
        Thread oddThread = new Thread(() -> printer.printOdd());

        evenThread.start();
        oddThread.start();

        try {
            evenThread.join();
            oddThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    static class NumberPrinter {
        private int count = 1;
        private final Object lock = new Object();

        public void printEven() {
            synchronized (lock) {
                while (count <= 10) {
                    if (count % 2 == 0) {
                        System.out.println(Thread.currentThread().getName() + ": " + count);
                        count++;
                        lock.notify();
                    } else {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }

        public void printOdd() {
            synchronized (lock) {
                while (count <= 10) {
                    if (count % 2 != 0) {
                        System.out.println(Thread.currentThread().getName() + ": " + count);
                        count++;
                        lock.notify();
                    } else {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
    }
}
