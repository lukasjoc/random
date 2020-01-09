package app;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {
   public static Connection conn = null;
   public static DatabaseMetaData dbMeta;

   // getConnection that establishes a new jdbc mysql connection based on the
   // connection values, returns a new connection runs as a kind of factory
   public static Connection newConn(final String url, final String username, final String passwd)
         throws SQLException, ClassNotFoundException {
            
      // reuse old connection
      if (conn != null) {
         System.out.println("reuse connecton: " + dbMeta.getURL());
         return conn;
      }

      // new connection
      try {
         conn = DriverManager.getConnection(url, username, passwd);
         System.out.println("new connection up and running: " + dbMeta.getURL());
      } catch (SQLException e) {
         e.printStackTrace();
         System.err.println("could not get new connection to database");
      }
      return conn;
   }
}
