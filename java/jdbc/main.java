package jdbc;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 * main
 */
public class main {

  public static void main(final String[] args) {
    try {
      Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/")
    } catch (Exception e) {
      //TODO: handle exception
    }
  }
}