/**
 * 
 */
package fuckyou;

import java.io.Serializable; 
import javax.persistence.Entity; 
import javax.persistence.Id;

@Entity
public class Schueler implements Serializable {
	
    @Id private int id;
    private String firstname, surname; 
    
    public void setId(int id) {
    	this.id = id;
    }
    
    public void setSurname(String surname) {
    	this.surname = surname;
    }
    
    public void setFirstName(String firstname) {
    	this.firstname = firstname;
    }
    
}