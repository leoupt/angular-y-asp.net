import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO,actorDTO } from '../actores.interface';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
  
  form!:FormGroup;
  @Output() submit:EventEmitter<actorCreacionDTO>=new EventEmitter<actorCreacionDTO>();
  @Input() modelo!:actorDTO;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      fechaNacimiento:'',
      foto:''
    })

    if(this.modelo){
      this.form.patchValue(this.modelo);
    }
  }
  archivoSeleccionado(file:any){
    this.form.get('foto')?.setValue(file);
  }
  onSubmit(){
    this.submit.emit(this.form.value);
  }

}
