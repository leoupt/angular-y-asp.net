import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styles: [
    `.imagen{
      width:50px;
    }`
  ]
})
export class ListadoGenericoComponent implements OnInit {

  @Input() listado:any;
  constructor() { }

  ngOnInit(): void {
  }

}
