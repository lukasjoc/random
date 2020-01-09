package app;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Properties;


/**
 * Main
 */
public class Main extends JDBCConnection {

  public static void main(final String[] args) throws ClassNotFoundException, IOException {
    final FileInputStream fs;
    final Properties p;
    final String url, username, passwd, connPropsFile;
    try {
       connPropsFile = "config/c.properties";
       fs = new FileInputStream(new File(connPropsFile));
       p = new Properties();
       p.load(fs);

       url = (String) p.get("URL");
       username = (String) p.get("USER");
       passwd = (String) p.get("PASSWD");

       newConn(url, username, passwd);
       fs.close();
    } catch (final SQLException e) {
       e.printStackTrace();
    }
  }
}