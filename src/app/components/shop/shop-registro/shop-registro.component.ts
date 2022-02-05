import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  selector: 'app-shop-registro',
  templateUrl: './shop-registro.component.html',
  styleUrls: ['./shop-registro.component.css']
})
export class ShopRegistroComponent implements OnInit {

  @Output() salida = new EventEmitter();
  shopModel: ShopModel = new ShopModel();

  constructor(private _shopService: ShopService) { }

  ngOnInit(): void {
  }

  async registrar(forma: NgForm) {

      this._shopService.registrarTienda(this.shopModel).then((resp: any) => {
        forma.resetForm({ blnActivo: true });
        this.salida.emit();
        Toast.fire({
          icon: 'info',
          title: resp.msg
        });
      }).catch((err: any) => {
        Swal.fire({
          icon: "error",
          title: "Hubo un problema",
          text: `${err.error.msg}`,
        });
      });
    }
  
    limpiar(forma: NgForm) {
      forma.resetForm({blnActive: true});
    } 
}
