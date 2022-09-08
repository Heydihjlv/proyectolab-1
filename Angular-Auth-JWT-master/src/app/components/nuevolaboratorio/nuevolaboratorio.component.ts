import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrarLaboratorioService } from 'src/app/services/registrarlaboratorio.service';

@Component({
  selector: 'app-nuevolaboratorio',
  templateUrl: './nuevolaboratorio.component.html',
  styleUrls: ['./nuevolaboratorio.component.css']
})
export class NuevolaboratorioComponent implements OnInit {
  form: FormGroup;
  constructor( private labregister:RegistrarLaboratorioService,) {this.buildForm(); }

  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.maxLength(10)]),
      direccion: new FormControl('', [Validators.maxLength(200)]),
      ruc: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      propietario: new FormControl('', [Validators.required])
    });

  }

  
  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
    return this.labregister.createlab(value)
  }


}
