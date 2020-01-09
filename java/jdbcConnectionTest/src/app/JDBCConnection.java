package app;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.io.IOException;

public class JDBCConnection {
   public static Connection conn = null;
   public static DatabaseMetaData dbMeta;
   // getConnection that establishes a new jdbc mysql connection based on the connection values, returns a new connection runs as a kind of factory
   public static Connection newConn(final String url, final String username, final String passwd) throws SQLException, ClassNotFoundException, IOException {
      
      if(conn == null) {
         try {
            conn = DriverManager.getConnection(url, username, passwd);
            if (conn == null) {
               System.err.println("could not get new connection to database");
            }
   
            System.out.println("connection up and running...");
            dbMeta = conn.getMetaData();
            System.out.println(dbMeta);
   
            if (conn != null && !conn.isClosed()) {
               conn.close();
               System.out.println("closed connection to database..");
            }
         } catch (SQLException e) {
            e.printStackTrace();
         }
         return conn;
      }
      System.out.println("reuse connecton: " + dbMeta.getURL());
      return conn;
   }
}
