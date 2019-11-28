import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  
  usuario: Object = {
    nombre: "Julian",
    apellido: "Echeverri",
    correo: ""
  };

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
