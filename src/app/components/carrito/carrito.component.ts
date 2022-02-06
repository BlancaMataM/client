import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  idCarrito = environment.idCarrito;
  product: any;
  nameProduct: any;
  car: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getTiendaProducto();
  }

  async getTiendaProducto() {
    try {
      const resp: any = await this.productService.obtenerCarritoProductoId(this.idCarrito);
      this.product = resp.cont.car.aJsnProduct;

      for ( this.car of resp.cont.car.aJsnProduct) {

        this.nameProduct = this.car.createProductDTO
        console.log(this.car.createProductDTO);
      }

      // console.log(resp.cont.car.aJsnProduct);
    } catch (err) {
      
    }
  }

}
