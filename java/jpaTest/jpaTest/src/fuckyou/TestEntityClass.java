/**
 * 
 */
package fuckyou;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.AccessType;
import javax.persistence.Access;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name = "test")
public class TestEntityClass implements Serializable {

	// default length for fields that have 255 as default length
	private final static int base_len = 125;
	@Id
	@Access(AccessType.FIELD)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(length = base_len)
	private String firstname;
	@Column(length = base_len)
	private String surname;
	private long pre_tel;
	private int main_tel;

	// setFirstName sets the firstname value that will be transported
	// to the database layer
	public void setFirstName(String firstname) {
		if (firstname.length() <= base_len)
			this.firstname = firstname;
		else
			this.firstname = firstname.substring(0, base_len);
	}

	// setSurName sets the surname value that will be transported
	// to the database layer
	public void setSurName(String surname) {
		if (surname.length() <= base_len)
			this.surname = surname;
		else
			this.surname = surname.substring(0, base_len);
	}

	// sets the phone number with pre callable part into the databse
	// jo
	public void setTel(String number) {
		String[] numbers = number.split(" ");
		pre_tel = Long.parseLong(numbers[0]);
		main_tel = Integer.parseInt(numbers[1]);
	}

}