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
		EntityManagerFactory emf  = Persistence.createEntityManagerFactory("schule");
		EntityManager em = emf.createEntityManager();
		
		Schueler s = new Schueler();
		Schueler s1 = new Schueler()

		s.setId(1);
		s.setName("test");
		s1.setId(2);
		s1.setName("test0");
		
		em.getTransaction().begin();
		em.persist(s);
		em.persist(s1);
		em.getTransaction().commit();
		
		em.close(); 
		emf.close();
	}
}