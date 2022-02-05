import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopModel } from 'src/app/models/shop/shop.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url = `${environment.url}/shop`;
  constructor( private http: HttpClient ) { }

  obtenerTiendas() {
    return this.http.get(this.url).toPromise();
  }

  obtenerIdTienda(shopID: string) {
    console.log(shopID, 'lllllllllll');
    return this.http.get(`${this.url}/idShop/`, { params: { shopID } }).toPromise();
  }

  registrarTienda(shopModel: ShopModel) {
    return this.http.post(this.url, shopModel).toPromise();
  }

  modificarTienda(shopID: any, shopModel: ShopModel) {
    return this.http.put(this.url, shopModel, { params: { shopID } }).toPromise();
  }
  eliminarTienda(shopID: any, blnActive: any) {
    return this.http.delete(this.url, { params: { shopID, blnActive } }).toPromise();
  }
}
