import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
_url='http://localhost:3000/user/roles'
  constructor(
    private http: HttpClient
  ) { 
    console.log('servicio persona')
  }
 
  getRoles()
  {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
return this.http.get(this._url,{headers:header});
  }

}
