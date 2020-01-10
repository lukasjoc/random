package app;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

/**
 * Main
 */
public class Main {
  private static Connection conn = PersistenceFactory.jdbcConn;

  public static void main(final String[] args) {

    final FileInputStream fs;
    final Properties p;
    final String URL, uname, passwd, config;
    try {
      config = "config/c.properties";
      fs = new FileInputStream(new File(config));
      p = new Properties();
      p.load(fs);

      URL = (String) p.get("URL");
      uname = (String) p.get("USER");
      passwd = (String) p.get("PASSWD");
      fs.close();

      conn = PersistenceFactory.newJDBCConnection(URL, uname, passwd);
      conn.getMetaData();

    } catch (SQLException | ClassNotFoundException | IOException err) {
      System.err.format("failure in main class: %s", err);
    }
  }
}