package app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// returns new database connections with the singleton and factory pattern
// means it opens just one connection to the database, reuses old connections
// this can /should provide multiple db connectors hence the factory pattern
public class PersistenceFactory {
   public static Connection jdbcConn;

   // newJDBCConnection returns a new JDBC Connection object reused the old one if
   // it is not null
   public static Connection newJDBCConnection(final String URL, final String uname, final String passwd)
         throws SQLException, ClassNotFoundException {

      if (jdbcConn == null) {
         try {
            jdbcConn = DriverManager.getConnection(URL, uname, passwd);
            System.out.println("Current JDBC Connection: " + jdbcConn);
            System.out.println("JDBC Meta Data: " + jdbcConn.getMetaData());
         } catch (final SQLException err) {
            System.err.println("could not establish new connection to db: " + err);
         }
         return jdbcConn;
      }
      return jdbcConn;
   }

}
