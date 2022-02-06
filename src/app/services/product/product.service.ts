import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../models/products/product.model';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `${environment.url}/product`;
  urlCar = `${environment.url}/car`;
  constructor( private http: HttpClient ) { }


obtenerProductos() {
    return this.http.get(this.url).toPromise();
}

obtenerProductoId(productID: string) {

    return this.http.get(`${this.url}/idProdut`, { params: { productID } }).toPromise();
}

registrarProducto(producModel: ProductModel) {
    return this.http.post(this.url, producModel).toPromise();
}

editarProducto(productID: any, producModel: ProductModel) {
    return this.http.put(this.url, producModel, { params: { productID } }).toPromise();
}

eliminarProducto(productID: any, blnActive: any) {
    return this.http.delete(this.url, { params: { productID, blnActive } }).toPromise();
}

actualizarProductCarrito(carID: any, productModel: ProductModel) {
    console.log(carID, productModel);
    return this.http.patch(this.urlCar, productModel, { params: { carID } }).toPromise();
}

obtenerCarritoProductoId(carID: string) {

    return this.http.get(`${this.urlCar}/`, { params: { carID } }).toPromise();
}

}


