import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    SharedModule
  ]
})
export class AuthModule {

}
