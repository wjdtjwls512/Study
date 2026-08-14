import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class StudentsDAO {

    String HOST = "svc.sel3.cloudtype.app"; // 본인 Cloudtype Host
    String PORT = "32701";
    String DB_NAME = "dgsw";
    String USER = "root";
    String PASSWORD = "1234";

    String URL = "jdbc:mysql://" + HOST + ":" + PORT + "/" + DB_NAME
            + "?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul";

    public void insert() {
        Connection conn = null;
        PreparedStatement pstmt = null;
        String insertsql = "INSERT INTO students (name, age, email) VALUES (?, ?, ?)";

        try {
            //DB 연결
            conn = DriverManager.getConnection(URL, USER, "1234");
            pstmt = conn.prepareStatement(insertsql);

            System.out.println("name 을 입력하세요");
            String name = IO.readln();
            pstmt.setString(1, name);
            pstmt.setInt(2, 20);
            System.out.println("email 을 입력하세요");
            String email = IO.readln();
            pstmt.setString(3, email);
            // sql 작성완료

            // sql 구문 실행
            pstmt.executeUpdate();
            System.out.println("행 저장성공");


        } catch (Exception e) {
            e.printStackTrace();
//            conn.close();
        }
    }

    public void select() {
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        String selectsql = "SELECT * FROM students";

        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            pstmt = conn.prepareStatement(selectsql);

            rs = pstmt.executeQuery();
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String email = rs.getString("email");
                String created_at = rs.getString("created_at");
                System.out.print(id+"\t");
                System.out.print(name);
                System.out.print(age);
                System.out.print(email);
                System.out.println(created_at);

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void delete() {
        Connection conn = null;
        PreparedStatement pstmt = null;
        String deletesql = "DELETE FROM students";

        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            // sql 구문 설정
            pstmt = conn.prepareStatement(deletesql);
            // sql 구문 설정
            pstmt.executeUpdate();
            System.out.println("전체 삭제되었습니다.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void update() {
        Connection conn = null;
        PreparedStatement pstmt = null;
        String updateSQL = "update students set name = ? where email = ?";
        System.out.println("이름을 입력하세요");
        String name = IO.readln();
        System.out.println("email 어떤것을 바꿀래요?");
        String email = IO.readln();

        try {
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            pstmt = conn.prepareStatement(updateSQL);
            pstmt.setString(1, name);
            pstmt.setString(2, email);
            pstmt.executeUpdate();
            System.out.println("행을 수정하였습니다.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
