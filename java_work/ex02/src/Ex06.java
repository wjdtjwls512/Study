import java.util.Arrays;

public class Ex06 {
    static void main(String[] args) {

        int arr[] = new int[10];
        int brr[] = arr;

        arr[0] = 100;
        System.out.println("arr"+ Arrays.toString(arr));
        System.out.println("arr"+ Arrays.toString(brr));
    }
}
