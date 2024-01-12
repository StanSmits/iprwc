package nl.stansmits.iprwc.repository;

import nl.stansmits.iprwc.model.Item;
import nl.stansmits.iprwc.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

/**
 * The repository for the Item
 */
public interface ItemRepository extends JpaRepository<Item, UUID> {

    public Optional<User> findByName(String name);
}
