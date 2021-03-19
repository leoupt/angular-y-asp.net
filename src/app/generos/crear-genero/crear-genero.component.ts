import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {
  
  form!:FormGroup;

  constructor(private router:Router,
              private formBuilder:FormBuilder
              ) { }
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:["",{Validators:[Validators.required]}
              ]
    });
  }
  obtenerErrorNombre(){
    var campo=this.form.get('nombre');
    if(campo?.hasError('required')){
      return 'el campo nombre es requerido';
    }
    return '';
  }
  guardarCambios(){
    //guardar canmbio
    this.router.navigate(['/generos']);
  }

}
