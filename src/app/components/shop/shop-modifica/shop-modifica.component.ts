import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShopModel } from '../../../models/shop/shop.model';
import { ShopService } from '../../../services/shop/shop.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-shop-modifica',
  templateUrl: './shop-modifica.component.html',
  styleUrls: ['./shop-modifica.component.css']
})
export class ShopModificaComponent implements OnInit {

  @Output() salida = new EventEmitter();
  @Input() set idShopInput(value: string) {
    console.log(value);
    this.idShop = value
    this.ngOnInit();
  }

  

  shopModel: ShopModel = new ShopModel();
  idShop: any;
  getShop: any;

  
  constructor( private _shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

    try {
      const resp: any = await this._shopService.obtenerIdTienda(this.idShop);
      this.getShop = resp.cont.shop;
      console.log(resp.cont.shop, '---------');
    } catch (err: any) {
     Swal.fire({
       icon: "error",
       title: "Hubo un problema",
       text: `${err.error.msg}`,
     });
    }
  }


  async editar() {
    try {
      Swal.fire({
        title: `Estas a punto de Modificar la tienda`,
        text: "¿Estas Seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      });
      const resp: any = await this._shopService.modificarTienda(this.getShop._id, this.getShop);
      this.salida.emit();
      Toast.fire({
        icon: 'info',
        title: resp.msg
      });
      this.ngOnInit();
    } catch (err: any) {
      Toast.fire({
        icon: 'warning',
        title: err.error.msg
      })
    }
  }

  limpiar(forma: NgForm) {
    forma.resetForm({blnActivo: true});
  }

}
