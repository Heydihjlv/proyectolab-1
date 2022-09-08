import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  _url='http://localhost:3000/user/laboratorio'
  constructor(
    private http: HttpClient
  ) { 
    console.log('servicio persona')
  }
 
  getlaboratorio()
  {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
return this.http.get(this._url,{headers:header});
  }

}
