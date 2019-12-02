import { Component, OnInit } from '@angular/core';
// trabajando con formularios reactivos
import { FormGroup, FormControl, Validators } from "@angular/forms";
// se debe agregar ReactiveFormsModule en el app.module

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  // variable para manejar el formulario
  formulario: FormGroup;

  constructor() { 
    // el objeto de FormGroup necesita una estructra para ser inicializado
    this.formulario = new FormGroup();
  }

  ngOnInit() {
  }

}
