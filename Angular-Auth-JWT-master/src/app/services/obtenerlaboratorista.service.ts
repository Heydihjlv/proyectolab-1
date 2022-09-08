import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerlaboratoristaService {
  _url='http://localhost:3000/user/laboratorista/2'
  constructor(
    private http: HttpClient
  ) { 
    console.log('servicio laboratorista')
  }
 
  getlabo()
  {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
return this.http.get(this._url,{headers:header});
  }
}
