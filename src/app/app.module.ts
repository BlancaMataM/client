import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { ShopRegistroComponent } from './components/shop/shop-registro/shop-registro.component';
import { ShopModificaComponent } from './components/shop/shop-modifica/shop-modifica.component';
import { ProductEditComponent } from './components/productos/product-edit/product-edit.component';
import { ProductFormComponent } from './components/productos/product-form/product-form.component';
import { ProductListComponent } from './components/productos/product-list/product-list.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductEditComponent,
    ShopListComponent,
    ShopRegistroComponent,
    ShopModificaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
