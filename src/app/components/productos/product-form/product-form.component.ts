import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/product/product.service';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() salida = new EventEmitter();
  product: ProductModel = new ProductModel();
  idProduct: any;
  edit = false;


  constructor(private _productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

   
  }

  

  async registraProducto( forma: NgForm) {
    try {
      const resp: any = await this._productService.registrarProducto(this.product);
      console.log(resp);
      forma.resetForm({blnActive: true});
      Toast.fire({
        icon: 'info',
        title: resp.msg
      });
      this.salida.emit();
      this.router.navigate(['/']);
    } catch (error: any) {
      console.log(error);
      Toast.fire({
        icon: 'warning',
        title: error.error.msg
      })
    }
  }

 

}
