import { Component, OnInit } from '@angular/core';
import { ListaExamenesService } from 'src/app/services/lista-examenes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  form: FormGroup;
  public examenes:Array<any> = []

  constructor(
    private examenesService:ListaExamenesService,
  ) {
    this.examenesService.getexamen().subscribe((resp: any)=>
    {
      this.examenes = resp
    })
    this.buildForm();
   }
   

  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      nombreexamen: new FormControl(''),
    });

  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

}
