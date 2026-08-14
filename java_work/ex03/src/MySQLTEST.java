import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class MySQLTEST {
    static void main(String[] args) {

        String selectsql = "SELECT * FROM students";

        while (true) {
            System.out.println("뭘 할래요? \n 1. insert \n 2. select \n 3. delete \n 4. update \n 5. exit");
            String se = IO.readln();

            if (se.equals("1")) {
                StudentsDAO dao = new StudentsDAO();
                dao.insert();
            } else if (se.equals("2")) {
                StudentsDAO dao = new StudentsDAO();
                dao.select();
            } else if (se.equals("3")) {
                StudentsDAO dao = new StudentsDAO();
                dao.delete();
            } else if(se.equals("4")) {
                StudentsDAO dao = new StudentsDAO();
                dao.update();
            } else {
                System.out.println("종료됩니다.");
                break;
            }
        }
    }
}
