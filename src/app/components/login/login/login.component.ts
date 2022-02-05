import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person/person.service';
import Swal from 'sweetalert2';
import { PersonModel } from '../../../models/person/person.models';
declare var $: any;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  personaModel: PersonModel = new PersonModel();
  constructor(private _personService:PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  async ingresar(forma: NgForm) {

    try {
      console.log('e');
      const resp: any = await this._personService.login(this.personaModel);
console.log(resp, '+++++');
      // let jwt =  JSON.parse("[" + resp.cont.jwt + "]");
      // localStorage.setItem('auth', jwt[0].auth);
      console.log(resp, '------------------');
      Toast.fire({
          icon: 'info',
          title: `${resp.msg}`,
        });
      this.router.navigateByUrl('/shop');
    
    } catch (err: any) {
      Toast.fire({
        icon: 'warning',
        title: err.error.msg
      });
    }
  
  }
}
