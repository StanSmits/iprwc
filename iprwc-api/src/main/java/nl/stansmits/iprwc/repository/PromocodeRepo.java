package nl.stansmits.iprwc.repository;

import nl.stansmits.iprwc.model.Promocode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PromocodeRepo extends JpaRepository<Promocode, UUID> {
    Promocode findByPromocode(String promocode);
}
