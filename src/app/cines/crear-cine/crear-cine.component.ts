import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines.interface';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  modelo:cineDTO={nombre:'',latitud:0,longitud:0};
  constructor() { }

  ngOnInit(): void {
  }
  
  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }
}
