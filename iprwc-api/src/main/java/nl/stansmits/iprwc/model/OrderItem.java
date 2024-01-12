package nl.stansmits.iprwc.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.Reference;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    private String name;
    private float price;

    @Column(name = "order_id")
    @Type(type = "uuid-char")
    private UUID orderId;

    @ManyToOne
    @JoinColumn(name = "order_id", insertable = false, updatable = false)
    @Reference
    private Order order;
}
