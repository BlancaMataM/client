import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { PersonModel } from '../../models/person/person.models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

 
  url = `${environment.url}/login`;
  constructor( private http: HttpClient ) { }




registrarPersona(personModel:PersonModel) {
    return this.http.post(`${this.url}/register/`, personModel).toPromise();
}

login(personModel:PersonModel) {
  console.log(personModel);
  return this.http.post(`${this.url}/login/`, personModel).toPromise();

}
}
