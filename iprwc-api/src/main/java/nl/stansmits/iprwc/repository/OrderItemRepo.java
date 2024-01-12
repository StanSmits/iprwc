package nl.stansmits.iprwc.repository;

import nl.stansmits.iprwc.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrderItemRepo extends JpaRepository<OrderItem, UUID> {

}
