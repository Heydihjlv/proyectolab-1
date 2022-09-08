import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarLaboratorioService {
  _url='http://localhost:3000/user/registrolab'
  constructor(private http:HttpClient) { }

  createlab(body:any)
  {
    return this.http.post(this._url, body).toPromise().then((data:any)=>
    console.log(data))
  }
}
