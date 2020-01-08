package app;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class JDBCConnection {

   public static void main(final String[] args) throws FileNotFoundException, ClassNotFoundException, IOException {

      final FileInputStream fs;
      final Properties p;
      final Connection conn;
      final DatabaseMetaData dbMeta;
      final String url, username, passwd;

      try {
         String connPropsFile = "config/c.properties";
         fs = new FileInputStream(new File(connPropsFile));
         p = new Properties();
         p.load(fs);

         url = (String) p.get("URL");
         username = (String) p.get("USER");
         passwd = (String) p.get("PASSWD");

         conn = DriverManager.getConnection(url, username, passwd);

         if (conn == null) {
            System.err.println("could not get connection to database");
            return;
         }

         System.out.println("connection up and running...");

         dbMeta = conn.getMetaData();
         System.out.println(dbMeta);

         if (conn != null && !conn.isClosed()) {
            conn.close();
            System.out.println("closed connection to database..");
         }

         fs.close();
      } catch (final SQLException e) {
         e.printStackTrace();
      }
   }
}
