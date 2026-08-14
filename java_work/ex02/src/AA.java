public class AA {

    void doA() {
        for (int dan = 2; dan < 10; dan++) {
            for (int j = 1; j < 10; j++) {
                System.out.print(dan+" x "+j+" = "+dan*j+" ");
            }
            System.out.println();
        }
    }
    void doB() {
        int num = 10;
        switch (num) {
            case 10:
                System.out.println("10입니다.");
                break;
            default:
                System.out.println("기본");
        }
    }
}

