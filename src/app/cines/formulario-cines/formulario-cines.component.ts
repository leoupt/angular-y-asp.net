import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cines.interface';
import { Coordenada } from '../../utilidades/mapa/coordenada.interface';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {
  
  coordenadaInicial:Coordenada[]=[];
  form!:FormGroup;
  @Input() modelo!:cineCreacionDTO;
  @Output() guardarCambios:EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      latitud:['',[Validators.required]],
      longitud:['',[Validators.required]],
    })
    if(this.modelo){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud})
    }
  }
  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }
  
  recibirCoordenada(coordenada:Coordenada){
    this.form.patchValue(coordenada);
  }
}
