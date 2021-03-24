import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO,actorDTO } from '../actores.interface';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  
  modelo:actorDTO={nombre:'felipe',fechaNacimiento:new Date(),foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyflGCTkufi8WVyUdoRQAVk0ce72R2o3xEfw&usqp=CAU'}
  constructor(private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((p)=>{//alert(p.id)
    });
  }
  
  guardarCambios(actor:actorCreacionDTO){
      console.log(actor);
  }
}
