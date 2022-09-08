import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObtenerusuarioService } from 'src/app/services/obtenerusuario.service';

@Component({
  selector: 'app-obtenerusuarios',
  templateUrl: './obtenerusuarios.component.html',
  styleUrls: ['./obtenerusuarios.component.css']
})
export class ObtenerusuariosComponent implements OnInit {
  form: FormGroup;
  public usuario:Array<any> = []

  constructor(
    private obtenerUsuarioService:ObtenerusuarioService,
  ) {
    this.obtenerUsuarioService.getusuario1().subscribe((resp: any)=>
    {
      this.usuario = resp
    })
   }
  ngOnInit() {
  }

}
