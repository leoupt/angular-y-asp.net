import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO, actorDTO } from '../actores.interface';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  modelo:actorDTO={nombre:'',fechaNacimiento:new Date('00-000-0000'),foto:''}
  constructor() { }

  ngOnInit(): void {
  }
  
  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }
}
