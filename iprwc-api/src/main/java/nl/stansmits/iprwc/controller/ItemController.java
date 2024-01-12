package nl.stansmits.iprwc.controller;

import nl.stansmits.iprwc.model.Item;
import nl.stansmits.iprwc.repository.ItemRepository; // Import your ItemRepository or service

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemRepository itemRepository; // Inject your ItemRepository or service

    @Autowired
    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    /**
     * Get all items
     * @return a list of all items
     */
    @GetMapping("/all")
    public List<Item> getAllItems() {
        return itemRepository.findAll(); // Replace this with your actual repository or service method
    }

    /**
     * Get specific item by id
     *
     * @return Specified item
     */
    @GetMapping("/{item}")
    public Item getItem(@PathVariable(value="id") UUID id) {
        return itemRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ITEM_NOT_FOUND"));
    }

    @PostMapping
    public Item setItem(@RequestBody Item item) {

        if (itemRepository.findByName(item.getName()).isPresent()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "ITEM_EXISTS"
            );
        }

        itemRepository.save(item);

        return item;
    }
}
