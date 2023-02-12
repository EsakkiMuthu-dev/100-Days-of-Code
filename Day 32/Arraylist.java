import java.util.ArrayList;

public class Arraylist {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(4);
        list.add(12);
        list.add(21);
        list.add(23);
        list.add(24);
        list.add(25);

        System.out.println(list.toString());

    }
}
