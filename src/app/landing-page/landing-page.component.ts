import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  peliculas:any[]=[0];
  peliculasProximas:any[]=[1];


  ngOnInit(): void {
    setTimeout(()=>this.peliculas=[
      {titulo:'spiderman 2',
      fechaLanzamiento:new Date(),
      precio:20,
      poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo:'moana',
    fechaLanzamiento:new Date(),
    precio:30,
    poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'}
    ],2000)
  }
  manejarPuntaje(puntaje:number){
    alert(puntaje);
  }
}
