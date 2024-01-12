import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import { ItemComponent } from './item/item.component';
import { StoreComponent } from "./store.component";
import { StoreRoutingModule } from "./store-routing.module";
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    StoreComponent,
    ItemComponent,
    ItemsComponent,
    CartComponent
  ],
  imports: [
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule{}
