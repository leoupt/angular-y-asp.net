import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula.';
import { MultipleSelector } from '../../utilidades/selector-multiple/MultipleSelector';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {
  
  form!:FormGroup;
  @Output()OnSubmit:EventEmitter<PeliculaCreacionDTO>=new EventEmitter<PeliculaCreacionDTO>();
  @Input()modelo!:PeliculaDTO
  generosNoSeleccionados:MultipleSelector[]=[
    {llave:1,valor:'Drama'},
    {llave:2,valor:'Accion'},
    {llave:3,valor:'Comedia'},
  ];
  generosSeleccionados:MultipleSelector[]=[];

  cinesNoSeleccionados:MultipleSelector[]=[
    {llave:1,valor:'mall del sur'},
    {llave:2,valor:'mall sta anita'},
    {llave:3,valor:'mall puruchuco'},
    {llave:4,valor:'plaza norte'}
  ];
  cinesSeleccionados:MultipleSelector[]=[];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo:['',Validators.required],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosId:'',
      cinesId:''
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
    const generosIds=this.generosSeleccionados.map(val=>val.llave);
    this.form.get('generosId')?.setValue(generosIds);
    this.OnSubmit.emit(this.form.value);

    const cinesIds=this.cinesSeleccionados.map(val=>val.llave);
    this.form.get('cinesId')?.setValue(cinesIds);
    this.OnSubmit.emit(this.form.value);
  }
}
