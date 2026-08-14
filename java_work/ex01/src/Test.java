public class Test {
    public static void doA() {
        int number = 100;
        if (number >= 90) {
            System.out.println("A");
        } else {
            System.out.println("음..");
        }
        System.out.println("doA");
    }

    public static void doB() {
        for (int i = 0; i < 3; i++) {
            for ( int j = 0; j < 5; j++ ) {
                System.out.print("*");
            }
        }

        }
    }