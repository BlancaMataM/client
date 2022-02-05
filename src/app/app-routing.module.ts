import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductEditComponent } from './components/productos/product-edit/product-edit.component';
import { ProductFormComponent } from './components/productos/product-form/product-form.component';
import { ProductListComponent } from './components/productos/product-list/product-list.component';

import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { ShopModificaComponent } from './components/shop/shop-modifica/shop-modifica.component';
import { ShopRegistroComponent } from './components/shop/shop-registro/shop-registro.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'product',
    component: ProductListComponent
  }, 
  {
    path: 'product/create',
    component: ProductFormComponent
  }, 
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },

  {
    path: 'shop',
    component: ShopListComponent
  }, 
  {
    path: 'shop/create',
    component: ShopRegistroComponent
  }, 
  {
    path: 'shop/edit/:id',
    component: ShopModificaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
