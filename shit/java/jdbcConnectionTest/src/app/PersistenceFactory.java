package app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * PersistenceFactory
 *
*/
public class PersistenceFactory {
	public static Connection jdbcConn;

	public static Connection newJDBCConnection(final String URL, final String uname, final String passwd) throws SQLException, ClassNotFoundException {

		if (jdbcConn == null) {
    	try {
      	jdbcConn = DriverManager.getConnection(URL, uname, passwd);
				System.out.println("Current JDBC Connection: " + jdbcConn);
        System.out.println("JDBC Meta Data: " + jdbcConn.getMetaData());
       }catch (final SQLException err) {
				System.err.println("could not establish new connection to db: " + err);
       }
    	return jdbcConn;
    }

		return jdbcConn;
 }

} // End class PersistenceFactory
