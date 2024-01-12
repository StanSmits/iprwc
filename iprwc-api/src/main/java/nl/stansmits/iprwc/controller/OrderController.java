package nl.stansmits.iprwc.controller;

import nl.stansmits.iprwc.model.Order;
import nl.stansmits.iprwc.model.OrderItem;
import nl.stansmits.iprwc.model.User;
import nl.stansmits.iprwc.repository.OrderItemRepo;
import nl.stansmits.iprwc.repository.OrderRepo;
import nl.stansmits.iprwc.security.JWTUtil;
import nl.stansmits.iprwc.service.AuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import nl.stansmits.iprwc.security.JWTUtil;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private final OrderRepo orderRepo;

    private OrderItem orderItem;

    @Autowired
    private OrderItemRepo orderItemRepo;

    @Autowired
    public OrderController(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthorizationService authorizationService;

    /**
     * Get all orders, for admin use only
     * Get the JWT token from the Authorization header
     * Check if the user is an admin
     * If the user is an admin, return all orders
     *  @return a list of all orders
     */

    @GetMapping("/all")
    @ResponseBody
    public List<Order> getAllOrders() {
        User loggedInUser;

        try {
            loggedInUser = authorizationService.getLoggedInUser();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "You are not logged in");
        }

        if (loggedInUser.getRole().equals(User.Role.ADMIN)) {
            return orderRepo.findAll();
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "You are not an admin");
        }
    }

    /**
     * Get all orders from a user
     * @return a list of all orders from the user
     */
    @GetMapping("/user")
    @ResponseBody
    public List<Order> getAllOrdersFromUser() {
        UUID userID;

        try {
            userID = authorizationService.getLoggedInUser().getId();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "You are not logged in");
        }

        return orderRepo.findByUser(userID);
    }

    /**
     * Get a specific order
     *
     * @param orderId the id of the order
     * @return the order
     */
    @GetMapping("/{orderId}")
    @ResponseBody
    public Order getOrder(@PathVariable UUID orderId) {
        Optional<Order> order = orderRepo.findById(orderId);
        if (order.isPresent()) {
            return order.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found");
        }
    }

    /**
     * Create a new order
     *
     * @param order the order to be created
     * @return the created order
     */

    // For security reasons, the user id is not allowed to be set by the client
    // The user id is set by the server, using the JWT token
    @PostMapping("/create")
    @ResponseBody
    public Order createOrder(@RequestBody Order order) {
        UUID userID;

        if (order.getItems() == null || order.getItems().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Order must contain at least one item");
        }

        try {
            userID = authorizationService.getLoggedInUser().getId();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "You are not logged in");
        }

        if (order.getUser() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You are not allowed to set the user id");
        }

        order.setUser(userID);
        // Set the orderid for order items
        for (OrderItem item : order.getItems()) {
            item.setOrderId(order.getId());
        }


        return orderRepo.save(order);
    }
}
