package nl.stansmits.iprwc.repository;

import nl.stansmits.iprwc.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepo extends JpaRepository<Order, UUID> {
     public List<Order> findByUser(UUID userId);

}
