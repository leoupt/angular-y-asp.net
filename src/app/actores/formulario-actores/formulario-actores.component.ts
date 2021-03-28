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
  @Output() OnSubmit:EventEmitter<actorCreacionDTO>=new EventEmitter<actorCreacionDTO>();
  @Input() modelo!:actorDTO;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      fechaNacimiento:'',
      foto:'',
      biografia:''
    })

    if(this.modelo){
      this.form.patchValue(this.modelo);
    }
  }
  archivoSeleccionado(file:any){
    this.form.get('foto')?.setValue(file);
  }
  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }
  cambioMarkdown(texto:string){
    this.form.get('biografia')?.setValue(texto);
  }

}
