import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines.interface';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }
  modelo:cineDTO={nombre:'mall del sur',latitud:-12.054506157901226,longitud:-76.96550195105374};
  ngOnInit(): void {
  }
  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }
}
