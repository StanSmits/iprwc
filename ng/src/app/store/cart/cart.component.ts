import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { any } from 'cypress/types/bluebird';
import { Item } from 'src/app/shared/models/item.model';
import { PromoCode } from 'src/app/shared/models/promocode.model';
import { HttpClient } from '@angular/common/http';
import {ToastService} from '../../shared/toast/toast-service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  loggedIn: boolean = (localStorage.getItem('userData') || sessionStorage.getItem('userData')) ? true : false;

  cartItems: Item[] = JSON.parse(localStorage.getItem('cart') || '[]');
  amountOfItems: number = this.cartItems.length;
  totalPrice: number = this.cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  cartForm!: FormGroup;

  promoCode!: PromoCode;

  promoCodeForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.initForm();

  }

  private initForm(): void {
    this.cartForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/
        ),
      ]),
      address: new FormControl(null, Validators.required),
      address2: new FormControl(null),
      zipCode: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}\s[0-9]{2}$/),
      ]),
      country: new FormControl(null, Validators.required),
      paymentMethod: new FormControl(null, Validators.required),
    });

    this.promoCodeForm = new FormGroup({
      promocode: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    this.http.post('/order/create', {
      total: this.totalPrice,
      items: this.cartItems,
      user: localStorage.getItem('user'),
      timestamp: Date.now()
    }).subscribe(
      (res) => {
        this.toastService.show('Order placed', { classname: 'bg-success text-light', delay: 5000 });
        localStorage.removeItem('cart');
        this.cartItems = [];
        this.amountOfItems = 0;
        this.totalPrice = 0;
      },
      (err) => {
        this.toastService.show('Something went wrong', { classname: 'bg-danger text-light', delay: 5000 });
      }
    );
  }

  onPromoCodeSubmit(): void {
    console.log(this.promoCodeForm.value);

    this.http
      .get<PromoCode>('/promo/check', { params: this.promoCodeForm.value })
      .subscribe(
        (res: any) => {
          this.toastService.show('Promo code applied', { classname: 'bg-success text-light', delay: 5000 });
          this.promoCode = res;
          this.totalPrice = this.totalPrice * (1 - (this.promoCode.discount / 100))
        },
        (err) => {
          this.toastService.show('Promo code not valid', { classname: 'bg-danger text-light', delay: 5000 });
        }
      );
  }

  removeItemFromCart(item: Item): void {
    // Filter the items, but make sure to only remove 1 of the elements, since we can have multiple of the same item
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
    this.amountOfItems = this.cartItems.length;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
  }
}
