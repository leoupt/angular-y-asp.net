import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula.';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  modelo:PeliculaDTO={titulo:'',enCines:false,fechaLanzamiento:new Date(),resumen:'',poster:'',trailer:''};
  constructor() { }
  
  ngOnInit(): void {
  }
  
  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
