import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula.';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {
  
  form!:FormGroup;
  @Output()OnSubmit:EventEmitter<PeliculaCreacionDTO>=new EventEmitter<PeliculaCreacionDTO>();
  @Input()modelo:PeliculaDTO={titulo:'',enCines:false,fechaLanzamiento:new Date('00-00-0000'),resumen:'',poster:'',trailer:''}
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo:['',Validators.required],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''
    })
    if(this.modelo){
      this.form.patchValue(this.modelo);
    }
  }
  archivoSeleccionado(file:File){
    this.form.get('poster')?.setValue(file);
  }
  enviarMarkdown(texto:string){
    this.form.get('resumen')?.setValue(texto);
  }
  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }
}
