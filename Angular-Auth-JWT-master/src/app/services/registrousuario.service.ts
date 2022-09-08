import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrousuarioService {
  _url='http://localhost:3000/user/registro'
  constructor(private http:HttpClient) { }

  createUser(body:any)
  {
    return this.http.post(this._url, body).toPromise().then((data:any)=>
    console.log(data))
  }
}
