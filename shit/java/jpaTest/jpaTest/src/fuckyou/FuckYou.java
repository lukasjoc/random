package fuckyou;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * @author jochamlu
 *
 */
public class FuckYou {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("schule");
		EntityManager em = emf.createEntityManager();

		TestEntityClass s_obj = new TestEntityClass();
		s_obj.setFirstName("test");
		s_obj.setSurName("test");
		s_obj.setTel("089 1233345344");

		TestEntityClass s_obj1 = new TestEntityClass();
		s_obj1.setFirstName("test");
		s_obj1.setSurName("test0");
		s_obj1.setTel("089 1232245444");

		em.getTransaction().begin();
		em.persist(s_obj);
		em.persist(s_obj1);
		em.getTransaction().commit();
		em.close();
		emf.close();
	}
}
