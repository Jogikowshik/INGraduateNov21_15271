import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatListModule} from '@angular/material/list';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatDividerModule} from '@angular/material/divider';
import{MatMenuModule}from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent } from './Admin/header/header.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './Admin/product/product.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { CategoryComponent } from './Admin/category/category.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { OrdersListComponent } from './Admin/orders-list/orders-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductUpdateComponent } from './Admin/product-update/product-update.component';
import { CategoryUpdateComponent } from './Admin/category-update/category-update.component';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './layout/slider/slider.component';
import { MainHeaderComponents } from './layout/header/header.component';
import { MainFooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import {RouterModule} from '@angular/router';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HeaderComponent,
    AdminDashboardComponent,
    ProductComponent,
    ProductListComponent,
    CategoryComponent,
    CategoryListComponent,
    OrdersListComponent,
    ProductUpdateComponent,
    CategoryUpdateComponent,
    AdminUserComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    SliderComponent,
    MainHeaderComponents,
    MainFooterComponent,
    LayoutComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    PaymentComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatTableModule,
    MatRadioModule,
    RouterModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
