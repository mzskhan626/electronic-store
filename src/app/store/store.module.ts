import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from './product-detail.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule,HttpClientModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
        CartDetailComponent, CheckoutComponent,ProductDetailComponent,LoginComponent,RegisterComponent,],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent,ProductDetailComponent,LoginComponent,
        RegisterComponent,]
})
export class StoreModule { }