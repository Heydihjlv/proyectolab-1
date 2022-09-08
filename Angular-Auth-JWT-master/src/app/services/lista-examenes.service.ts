import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaExamenesService {
  _url='http://localhost:3000/user/examen'
  constructor(
    private http: HttpClient
  ) { 
    console.log('servicio examen')
  }
 
  getexamen()
  {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
return this.http.get(this._url,{headers:header});
  }
}
