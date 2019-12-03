import { Component, OnInit } from '@angular/core';
// trabajando con formularios reactivos
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
// se debe agregar ReactiveFormsModule en el app.module

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  // variable para manejar el formulario
  formulario: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: 'Julian',
      apellido: 'Echeverri'
    },
    correo: 'julianecheverri@outlook.com',
    //pasatiempos: ['Correr', 'Dormir', 'Comer']
  }

  // para asociarlo en el template se hace con la relacion de la propiedad [formGroup] = "formulario"
  constructor() { 
    // el objeto de FormGroup necesita una estructra para ser inicializado
    this.formulario = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre' : new FormControl('', [Validators.required, Validators.minLength(3)]), 
        'apellido' : new FormControl('', Validators.required), 
      }),


      //pasandole un valor por defecto, reglas de validacion, y reglas de validacion asincrona
      // 'nombre' : new FormControl('Julian'), 
      // con validators
      // 'nombre' : new FormControl('', [Validators.required, Validators.minLength(3)]), 
      // 'apellido' : new FormControl('', Validators.required), 
      'correo' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]), 
      // para una array
      'pasatiempos' : new FormArray([
        new FormControl('Correr', Validators.required )
      ])
    });

    // inicializar valores 
    //this.formulario.setValue(this.usuario);



  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.formulario.value);
    console.log(this.formulario);
    console.log(this.usuario);
    this.formulario.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });
  }

  agregarPasatiempo(){
    (<FormArray>this.formulario.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }


}
