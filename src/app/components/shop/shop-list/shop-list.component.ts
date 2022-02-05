import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopModel } from '../../../models/shop/shop.model';
import { ShopService } from '../../../services/shop/shop.service';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopModel: ShopModel = new ShopModel();
  editar = false; 
  idShop: any;
  shopArr: any[] = [];
  constructor(private _shopService: ShopService, private router: Router) { }


  ngOnInit(): void {
    this.obtenerTiendas();
  }

  async obtenerTiendas() {
    try {
      const resp: any  = await this._shopService.obtenerTiendas(); 
      this.shopArr = resp.cont.shop;
      // console.log(this.shopArr);
    } catch (err: any) {
      
    }
  }

  eliminar(shopModel: ShopModel) {
    const id = shopModel._id
    console.log(shopModel._id);
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar a ${shopModel.strName}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        this._shopService.eliminarTienda(id, false).then((resp: any) => {
          Toast.fire(resp.msg, '', 'success');
          this.ngOnInit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

  modificar(idShop: any ) {
console.log(' modifica ', idShop);
    this.idShop = idShop;
    this.editar = true;
  }

  registro(){
    this.editar = false;
  }

}
