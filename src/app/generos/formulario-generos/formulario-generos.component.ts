import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generoCreacionDTO } from '../genros.interface';

@Component({
  selector: 'app-formulario-generos',
  templateUrl: './formulario-generos.component.html',
  styleUrls: ['./formulario-generos.component.css']
})
export class FormularioGenerosComponent implements OnInit {

  form!:FormGroup;
  @Input() modelo!:generoCreacionDTO;
  @Output() onSubmit:EventEmitter<generoCreacionDTO >=new EventEmitter<generoCreacionDTO>();
  constructor(private formBuilder:FormBuilder
              ) { }
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:["",[
                  Validators.required,
                  Validators.minLength(3)
              ]]
    });
    
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }
  }
  obtenerErrorNombre(){
    var campo=this.form.get('nombre');
    if(campo?.hasError('required')){
      return 'el campo nombre es requerido';
    }
    if(campo?.hasError('minlength')){
      return 'el campo nombre es muy corto';
    }
    return '';
  }
  guardarCambios(){
      
    this.onSubmit.emit(this.form.value);
  }

}
