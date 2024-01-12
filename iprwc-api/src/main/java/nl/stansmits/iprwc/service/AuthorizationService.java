package nl.stansmits.iprwc.service;

import nl.stansmits.iprwc.dto.RegisterDTO;
import nl.stansmits.iprwc.repository.UserRepo;
import nl.stansmits.iprwc.model.User;
import nl.stansmits.iprwc.model.User.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * The service for authorization
 */
@Component
public class AuthorizationService {

    @Autowired private UserRepo userRepo;

    /**
     * Get the logged in user
     * @return the logged in user
     */
    public User getLoggedInUser() {
        if (userRepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).isPresent()) {
            return userRepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
        }

        return null;
    }

    public User convertToUserEntity(RegisterDTO registrationRequest) {
        User user = new User();
        user.setName(registrationRequest.getName());
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(null);
        user.setRole(Role.CUSTOMER);

        return user;
    }
}
