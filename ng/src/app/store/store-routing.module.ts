import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: StoreComponent },
      { path: 'cart', children: [{ path: '', component: CartComponent }] },
      { path: ':id', component: ItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
