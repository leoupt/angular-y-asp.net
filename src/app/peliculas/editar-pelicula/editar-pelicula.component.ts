import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula.';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  modelo:PeliculaDTO={titulo:'spiderman',trailer:'el trailer',enCines:true,resumen:'el resumen de la pelicula',fechaLanzamiento:new Date(),poster:'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'}
  constructor() { }

  ngOnInit(): void {
  }
  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
