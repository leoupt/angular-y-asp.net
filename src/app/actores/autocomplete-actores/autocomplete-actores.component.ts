import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  control:FormControl=new FormControl();
  actores=[
    {nombre:'Tom holland',foto:'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {nombre:'Tom hanks',foto:'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg'},
    {nombre:'Samuel l. jackson',foto:'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg'},
  ]
  actoresOriginal=this.actores;
  actoresSeleccionados:any[]=[];
  columnasAMostrar=['imagen','nombre','personaje','acciones'];
  @ViewChild(MatTable) table!:MatTable<any>;
  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor=>{
      this.actores=this.actoresOriginal;
      this.actores=this.actores.filter(x=>x.nombre.indexOf(valor)!==-1);
    })
  }
  eliminar(actor:any){
    const indice=this.actoresSeleccionados.findIndex(a=>a.nombre===actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

  optionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table){
      this.table.renderRows();
    }
  }
  finalizaArratre(event:CdkDragDrop<any[]>){
    const indicePrevio=this.actoresSeleccionados.findIndex(a=>a===event.item.data);
    moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex);
    this.table.renderRows();
  }

}
