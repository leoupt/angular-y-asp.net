import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Input()coordenadasIniciales:Coordenada[]=[];
  @Output()coordenadaSeleccionada:EventEmitter<Coordenada>=new EventEmitter<Coordenada>();
  constructor() { }

  ngOnInit(): void {
    this.capas=this.coordenadasIniciales.map(valor=>marker([valor.latitud,valor.longitud]));
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(-12.039259434621663,-77.01078937388958)
  };
  capas:Marker<any>[]=[];

  manejarClick(event:any){
    const latitud=event.latlng.lat;
    const longitud=event.latlng.lng;
    console.log({latitud,longitud});
    
    this.capas=[];
    this.capas.push(marker([latitud,longitud]));
    this.coordenadaSeleccionada.emit({latitud:latitud,longitud:longitud});
  }
}
