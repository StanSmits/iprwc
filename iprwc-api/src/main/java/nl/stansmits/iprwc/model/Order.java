package nl.stansmits.iprwc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import javax.persistence.*;
import java.util.List;
import java.util.UUID;
import nl.stansmits.iprwc.model.OrderItem;


@Getter
@Setter
@Entity
@Table(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @Column(name = "id")
    @Type(type = "uuid-char")
    private UUID id = UUID.randomUUID();

    @Column(name = "total")
    private float total;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private List<OrderItem> items;

    @Column(name = "user_id")
    @Type(type = "uuid-char")
    private UUID user;

    @Column(name = "timestamp")
    private long timestamp = System.currentTimeMillis();
}
