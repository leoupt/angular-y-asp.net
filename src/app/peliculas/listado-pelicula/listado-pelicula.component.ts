import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls:['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  @Input() peliculas:any[]=[
                            {titulo:'spiderman',
                            fechaLanzamiento:new Date(),
                            precio:20}];
  constructor() { }

  ngOnInit(): void {
  }

  
  

}
