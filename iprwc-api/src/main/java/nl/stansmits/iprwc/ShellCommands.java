package nl.stansmits.iprwc;

import java.util.List;

import javax.annotation.PostConstruct;

import nl.stansmits.iprwc.config.ConfigProperties;
import nl.stansmits.iprwc.model.User;
import nl.stansmits.iprwc.repository.UserRepo;
import nl.stansmits.iprwc.security.JWTUtil;
import nl.stansmits.iprwc.util.StringUtil;
import org.apache.commons.lang3.EnumUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.commands.Quit;

@ShellComponent
public class ShellCommands implements Quit.Command {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private ApplicationContext appContext;
    @Autowired
    private ConfigProperties config;
    Logger logger = LoggerFactory.getLogger(ShellCommands.class);

    @ShellMethod("Add a user")
    public String addUser(String name, String email, String organization, String role, String password) {
        // check if all the fields are filled
        if (name.isEmpty() || email.isEmpty() || organization.isEmpty() || role == null || password.isEmpty()) {
            return "Please fill all the fields";
        }

        // check if role is a valid role
        if (!EnumUtils.isValidEnum(User.Role.class, role.toUpperCase())) {
            return "Role is not valid, use one of the following: " + User.Role.values().toString();
        }

        // Check if email is of a valid type
        if (!StringUtil.isValidEmail(email)) {
            return "Email is not valid or email domain is not allowed (you can add it via the addEmailDomain command)";
        }

        // Check if the email already exists
        if (userRepo.findByEmail(email).isPresent()) {
            return "Email already exists";
        }

        // create new user
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setRole(User.Role.valueOf(role.toUpperCase()));
        user.setPassword(passwordEncoder.encode(password));
        user.setEnabled(true);
        user.setPasswordChangeTime(System.currentTimeMillis());
        userRepo.save(user);

        return jwtUtil.generateToken(email);
    }

    @ShellMethod("Show example commands")
    public String examples() {
        return "Example commands:\r\n\r\n" +
                "add-user --name Hulpverlener --email test2@live.nl --organization hsleiden --role CAREGIVER --password 12345678\r\n"
                +
                "add-email-domain --domain live.nl";
    }

    @ShellMethod(value = "Exit", key = { "quit", "exit", "terminate" })
    public String quit() {
        SpringApplication.exit(appContext, () -> 0);
        return "Exiting...";
    }

    @PostConstruct
    public void init() {
        // Check if the database is empty
        if (userRepo.count() > 0) {
            logger.info("Root user already exists. Skipping root user creation.");
            return;
        }

        // Create the root user
        User user = new User();
        user.setName("root");
        user.setEmail(config.getRootEmail());
        user.setRole(User.Role.ADMIN);
        user.setPassword(passwordEncoder.encode(config.getRootPassword()));
        user.setEnabled(true);
        user.setPasswordChangeTime(System.currentTimeMillis());
        userRepo.save(user);

        logger.info("Root user created with email: {} and password: {}", config.getRootEmail(), config.getRootPassword());
    }
}
