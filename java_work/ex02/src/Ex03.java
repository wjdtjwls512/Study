public class Ex03 {
    static void main() {
        int num = 1;
        while (num < 11) {
            if (num == 5) { num++; continue; }
            if (num == 9) break;
            System.out.print(num+" ");
            num++;
        }
//        int num = 0;
//        while (num < 5) {
//            System.out.println("num = "+num);
//            num++;
//        }
    }
}
