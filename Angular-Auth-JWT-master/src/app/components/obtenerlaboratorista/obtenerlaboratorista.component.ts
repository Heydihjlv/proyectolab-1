import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObtenerlaboratoristaService } from 'src/app/services/obtenerlaboratorista.service';

@Component({
  selector: 'app-obtenerlaboratorista',
  templateUrl: './obtenerlaboratorista.component.html',
  styleUrls: ['./obtenerlaboratorista.component.css']
})
export class ObtenerlaboratoristaComponent implements OnInit {
  form: FormGroup;
  public laboratorista:Array<any> = []

  constructor(
    private laboService:ObtenerlaboratoristaService,
  ) {
    this.laboService.getlabo().subscribe((resp: any)=>
    {
      this.laboratorista = resp
    })
   }
  ngOnInit() {
  }

}
