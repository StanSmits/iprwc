import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item } from 'src/app/shared/models/item.model';
import { ToastService } from 'src/app/shared/toast/toast-service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  public cart: Item[] = JSON.parse(localStorage.getItem('cart') || '[]');

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }


  items!: Item[];

  ngOnInit() {
    this.http.get('/item/all').subscribe((data: any) => {
      this.items = data;
    });
  }

  addToCart(item: Item) {
      this.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart));

      this.toastService.show('Item toegevoegd aan winkelwagen!', {
        classname: 'bg-info text-light', delay: 3000
      });

      console.log(this.cart);
  }
}
