import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelector } from './MultipleSelector';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  @Input() Seleccionados:MultipleSelector[]=[];
  @Input() NoSeleccionados:MultipleSelector[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(item:MultipleSelector,index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1);
  }
  deseleccionar(item:MultipleSelector,index:number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1);
  }
  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados=[];
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados=[];
  }
}
