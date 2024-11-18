import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
 
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { ProductDetailComponent } from './store/product-detail.component';
import { LoginComponent } from './store/login.component';
import { RegisterComponent } from './store/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule,FormsModule, HttpClientModule,
    RouterModule.forRoot([
        {
            path: "store", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "cart", component: CartDetailComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "checkout", component: CheckoutComponent,
            canActivate: [StoreFirstGuard]
        },
        { path: "product/:id", component: ProductDetailComponent },
        { path: "login", component: LoginComponent }, // Added login route
      { path: "register", component: RegisterComponent }, // Added register route
        { path: "**", redirectTo: "/store" }
    ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }