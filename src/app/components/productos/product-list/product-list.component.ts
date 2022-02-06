import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment.prod';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() salida = new EventEmitter();
  @Output() actualizarProductos = new EventEmitter();
  product: any[] = [];
  // productModel: ProductModel;
  idCarrito = environment.idCarrito;
  edit = false;
  constructor( private productService: ProductService) { }


  ngOnInit(): void {
    this.obtenerProductos();
  }

  async obtenerProductos() {
    try {
      const resp: any = await this.productService.obtenerProductos();
      console.log(resp.cont.product);
      this.product = resp.cont.product;
    } catch (err) {
    }
   
  }

  async agregarProductoCarrito(productModel: ProductModel) {
    try {
      const resp: any = await this.productService.actualizarProductCarrito(this.idCarrito, productModel);
      Toast.fire({
        icon: 'info',
        title: resp.msg
      });
    } catch (err: any) {
      Toast.fire({
        icon: 'warning',
        title: err.error.msg
      })
    }
  }

  eliminar(productModel: ProductModel) {
    const id = productModel._id
    console.log(productModel._id);
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar a ${productModel.strName}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        this.productService.eliminarProducto(id, false).then((resp: any) => {
          Toast.fire(resp.msg, '', 'success');
          this.ngOnInit();
          this.actualizarProductos.emit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

  async modificarProducto() {}

}
