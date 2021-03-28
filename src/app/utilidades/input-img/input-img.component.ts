import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades.interface';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {
  
  imagenBase64!:string;
  @Output() archivoSeleccionado:EventEmitter<File>=new EventEmitter<File>();
  @Input() URLImagenActual!:string;
  constructor() { } 

  ngOnInit(): void {
  }
  change(event:any){
    if(event.target.files.length>0){
      const file:File=event.target.files[0];
      toBase64(file).then((valor:any)=>this.imagenBase64=valor)
      .catch(error=>console.log(error));
      
      this.archivoSeleccionado.emit(file);
      this.URLImagenActual='';
    }
  }
}
