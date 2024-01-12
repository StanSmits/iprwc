package nl.stansmits.iprwc.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PromocodeDTO {
    private String promocode;
    private float discount;
    private String description;
}
