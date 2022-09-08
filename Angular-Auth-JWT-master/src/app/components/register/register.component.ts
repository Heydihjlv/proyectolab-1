import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { RolesService } from 'src/app/services/roles.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegistrousuarioService } from 'src/app/services/registrousuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    public roles:Array<any> = []
    public laboratorios:Array<any> = []

  constructor(
    private userRegisterService:RegistrousuarioService,
    private rolesService:RolesService,
    private laboratorioService:LaboratorioService,
  ) { 
    this.rolesService.getRoles().subscribe((resp: any)=>
      {
        this.roles = resp
      })

      this.laboratorioService.getlaboratorio().subscribe((resp: any)=>
      {
        this.laboratorios = resp
      })

      this.buildForm();
  }


  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      idrol: new FormControl('', [Validators.required]),
      idlaboratorio: new FormControl('', [Validators.required]),
      numcedula: new FormControl('', [Validators.maxLength(10)]),
      nombre: new FormControl('', [Validators.maxLength(200)]),
      apellido: new FormControl('', [Validators.required]),
      fechanac: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    });

  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
    return this.userRegisterService.createUser(value)
  }


}
