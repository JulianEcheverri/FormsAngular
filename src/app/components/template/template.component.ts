import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `.ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }`
  ]
})
export class TemplateComponent implements OnInit {
  
  usuario: any = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ]

  sexos: String[] = ['Hombre', 'Mujer', 'Otro'];



  constructor() { }

  ngOnInit() {
  }

  // importar el ngForm!!
  guardar(ft: NgForm){
    console.log(ft);
    console.log(ft.value);

    console.log(this.usuario);
  }

}
