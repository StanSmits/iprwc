export class PromoCode {
    code: string;
    discount: number;
    description: string;

    constructor(code: string, discount: number, description: string) {
        this.code = code;
        this.discount = discount;
        this.description = description;
    }
}