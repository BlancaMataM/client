import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../../models/products/product.model';
import { ProductService } from '../../../services/product/product.service';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // @Input() producto: ProductModel; 
  @Output() salida = new EventEmitter();
  product: ProductModel = new ProductModel();
  idProduct: any;
  producto: any;
  edit = false;
  constructor( private _productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  async ngOnInit() {

    this.idProduct = this.activatedRoute.snapshot.params.id;
    console.log(this.idProduct);
    if (this.idProduct) {
      const resp: any = await this._productService.obtenerProductoId(this.idProduct);
      this.producto = resp.cont.product;
      this.idProduct = resp.cont.product;
      this.edit = true;
    }
  }

  async modificarProducto() {
try {
  
  const resp: any = await this._productService.editarProducto(this.producto._id, this.producto);
    Toast.fire({
      icon: 'info',
      title: resp.msg
    });
    this.router.navigate(['/']);
} catch (err: any) {
  // console.log(object);
  Toast.fire({
    icon: 'warning',
    title: err.error.msg
  })
}
}


}
