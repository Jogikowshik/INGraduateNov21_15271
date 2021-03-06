import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/User/login/login.component';
import { RegistrationComponent } from './component/User/registration/registration.component';
import { UserlistComponent } from './component/User/userlist/userlist.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,

  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"userlist",
    component:UserlistComponent
  },
  {

    path:"payment",

    component:PaymentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
