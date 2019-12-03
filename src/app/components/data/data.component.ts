import { Component, OnInit } from '@angular/core';
// trabajando con formularios reactivos
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';
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
        'apellido' : new FormControl('', [Validators.required, this.noHerrera]), // validaciones personalizadas sin parentesis por que no retorna nada
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
      ]),
      // validador asincrono para comprobar disponibilidad del nombre de usuario
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl() 
    });

    // otraf orma de agregar validaciones
    this.formulario.controls['password2'].setValidators([
      Validators.required,
      // para especifiar un valor al this de la funcion llamada
      this.noIgual.bind(this.formulario)
    ])

    // llamo una funcion que me devuelve un observable al cual puedo subscribirme, esto para estar pendiente de los cambios en la data de mi formulario
    this.formulario.valueChanges.subscribe(data => {
      console.log(data);
    })

    // para un control en especifico
    this.formulario.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    })

    // para los status del control
    this.formulario.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    })


    // inicializar valores 
    //this.formulario.setValue(this.usuario);

    // ¿Qué es el estado pristine en un input?
    // significa que el input tiene el valor inicial y no se ha modificado

  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.formulario.value);
    console.log(this.formulario);
    console.log(this.usuario);
    // this.formulario.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
  }

  agregarPasatiempo(){
    (<FormArray>this.formulario.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  // validacion personalizada
  noHerrera(control: FormControl): {[s:string]: boolean} {
    if (control.value === 'herrera') {
      return {
        noherrera: true // regresa si tiene el apellido 
      }
    } else {
      return null;
    }
  }

  noIgual(control: FormControl): any {
    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true // contraseña igual
      }
    } else {
      return null;
    }
  }
  // me puede regresar una promesa o un observable de cualqueir tipo
  existeUsuario(control: FormControl): Promise<any> | Observable <any>{
    
    let promesa = new Promise((resolve, reject) => {
      // el setTimeout para validar si el valor enviado es strider, devuelve en el resolve true si existe y si no, null
      setTimeout(() => {
        if (control.value === "strider") {
          resolve({existe: true});
        }
        else{
          resolve(null);
        }
      }, 3000);

    });

    return promesa;

  }


}
