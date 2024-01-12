package nl.stansmits.iprwc.model;

import javax.persistence.*;

import nl.stansmits.iprwc.service.EntityIdResolver;
import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.util.List;
import java.util.Set;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.*;

/**
 * The user of the application
 */
@Getter
@Setter
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(
   generator = ObjectIdGenerators.PropertyGenerator.class,
   property = "id",
   resolver = EntityIdResolver.class,
    scope = User.class
   )
public class User {
    /**
     * The roels a user can have
     */
    public enum Role {
        /** Admin */
        ADMIN,
        /** Employee */
        EMPLOYEE,
        /** Customer */
        CUSTOMER
    }

    @Id
    @Column(name = "id")
    @Type(type = "uuid-char")
    private UUID id = UUID.randomUUID();
    /**
     * The name of the user
     */
    private String name;
    /**
     * The email of the user
     */
    @Column(unique=true)
    private String email;
    /**
     * The password of the user
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    /**
     * The state of activation of the account
     */
    private boolean enabled = false;
    /**
     * The entries a user filled in
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
    @JsonIgnore
    private Set<Order> orders;
    /**
     * The role of the user
     */
    @Column(nullable = false)
    private Role role = Role.CUSTOMER;

    @Column(nullable = false)
    @JsonIgnore
    private long passwordChangeTime = 0;
}
