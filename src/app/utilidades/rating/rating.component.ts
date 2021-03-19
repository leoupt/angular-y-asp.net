import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  @Input() maximoRating=5;
  @Input() ratingSeleccionado=0;
  @Input()maxRatingArray:number[]=[];
  voto:boolean=false;
  ratingAnterior:number=0;
  @Output() puntaje:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray= Array(this.maximoRating).fill(0);
  }
  manejarMouseEnter(index:number){
      this.ratingSeleccionado=index+1;
  }
  manejarMouseLeave(){
    if(this.ratingAnterior!==0){
      this.ratingSeleccionado=this.ratingAnterior
    }else{
      this.ratingSeleccionado=0;
    }
  }
  hacerClick(index:number){
    this.ratingSeleccionado=index+1;
    this.voto=true;
    this.ratingAnterior=this.ratingSeleccionado;
    this.puntaje.emit(this.ratingSeleccionado);
  }

}
