package nl.stansmits.iprwc.controller;

import nl.stansmits.iprwc.dto.PromocodeDTO;
import nl.stansmits.iprwc.model.Promocode;
import nl.stansmits.iprwc.repository.PromocodeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/promo")
public class PromocodeController {

    @Autowired
    private PromocodeRepo promocodeRepo;

    @RequestMapping("/check")
    public PromocodeDTO checkPromocode(String promocode) {
        Promocode resolvedPromocode = promocodeRepo.findByPromocode(promocode);
        if (resolvedPromocode == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Promocode not found");
        }

        if (resolvedPromocode.getExpirationDate().before(new java.util.Date())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Promocode expired");
        }

        PromocodeDTO promocodeDTO = new PromocodeDTO();
        promocodeDTO.setPromocode(resolvedPromocode.getPromocode());
        promocodeDTO.setDiscount(resolvedPromocode.getDiscount());
        promocodeDTO.setDescription(resolvedPromocode.getDescription());

        return promocodeDTO;
    }

    @RequestMapping("/create")
    // Have to use RequestBody to get the body of the request
    public Promocode createPromocode(@RequestBody Promocode promocode) {
        Promocode newPromocode = new Promocode();
        newPromocode.setPromocode(promocode.getPromocode());
        newPromocode.setDiscount(promocode.getDiscount());
        newPromocode.setDescription(promocode.getDescription());
        newPromocode.setExpirationDate(promocode.getExpirationDate());

        promocodeRepo.save(newPromocode);

        return newPromocode;
    }
}
