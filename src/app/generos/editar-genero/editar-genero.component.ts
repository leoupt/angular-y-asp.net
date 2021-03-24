import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO } from '../genros.interface';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo:generoCreacionDTO={nombre:'Drama'};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarCambios(genero:generoCreacionDTO){
    console.log(genero);
    this.router.navigate(['/generos']);
  }
}
