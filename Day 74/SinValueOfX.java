public class SinValueOfX {

    public static void main(String[] args) {
        double x = 30; // Angle in degrees
        int n = 10;    // Number of terms in the series
        double result = computeSin(x, n);
        System.out.println("sin(" + x + ") = " + result);
    }

    public static double computeSin(double x, int n) {
        // Convert angle from degrees to radians
        double radians = Math.toRadians(x);

        double sinValue = 0;
        double term = radians;

        for (int i = 1; i <= n; i += 2) {
            sinValue += term;
            term *= -1 * radians * radians / ((i + 1) * (i + 2)); // new term formula
        }

        return sinValue;
    }
}
