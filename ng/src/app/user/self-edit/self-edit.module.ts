import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SelfEditComponent} from "./self-edit.component";
import {SharedModule} from "../../shared/shared.module";
import { StoreModule } from "src/app/store/store.module";
import { OrdersComponent } from "src/app/store/orders/orders.component";

@NgModule({
  declarations: [
    SelfEditComponent,
    OrdersComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: SelfEditComponent,
    }]),
    SharedModule
  ]
})
export class SelfEditModule {

}
