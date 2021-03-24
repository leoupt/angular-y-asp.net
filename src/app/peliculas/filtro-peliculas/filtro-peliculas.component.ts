import { ContentObserver } from '@angular/cdk/observers';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {
  generos=[
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Accion'},
    {id:3,nombre:'Comedia'},
  ]
  form!:FormGroup;
  peliculas=[
    {titulo:'spiderman',enCines:false,proximosEstrenos:true,generos:[1,2],poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo:'moana',enCines:true,proximosEstrenos:false,generos:[3],poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo:'inception',enCines:false,proximosEstrenos:false,generos:[1,3],poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
  ]
  peliculasOriginal=this.peliculas;
  formularioOriginal={
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  }
  constructor(private formBuilder:FormBuilder,
              private location:Location,
              private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.form=this.formBuilder.group(this.formularioOriginal);
      
      this.leerParametrosURL();
      this.buscarPeliculas(this.form.value);

      this.form.valueChanges
      .subscribe(cambios=>{
        console.log(cambios);
        this.peliculas=this.peliculasOriginal;
        this.buscarPeliculas(cambios);
        this.escribirParametros();
      })
      
    }

    buscarPeliculas(cambios:any){
      if(cambios.titulo){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.titulo.indexOf(cambios.titulo)!==-1)
      }
      if(cambios.generoId!==0){
        this.peliculas=this.peliculas.filter(pelicula=>pelicula.generos.indexOf(cambios.generoId)!==-1)
        }
      if(cambios.proximosEstrenos){
        this.peliculas=this.peliculas.filter(pelicula=>pelicula.proximosEstrenos)
        }
      if(cambios.enCines){
        this.peliculas=this.peliculas.filter(pelicula=>pelicula.enCines)
        }

    }
  escribirParametros(){
    var queryString=[];
    var valores=this.form.value;
    if(valores.titulo){
      queryString.push(`titulo=${valores.titulo}`);
    }
    if(valores.generoId!='0'){
      queryString.push(`generoId=${valores.generoId}`);
    }
    if(valores.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }
    if(valores.enCines){
      queryString.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/buscar',queryString.join('&'));

    console.log()
  }
  
  leerParametrosURL(){
      this.activatedRoute.queryParams.subscribe(params=>{
        
          var objeto:any={};
          if(params.titulo){
            objeto.titulo=params.titulo;
          }
          if(params.generoId){
            objeto.generoId=Number(params.generoId);
          }
          if(params.proximosEstrenos){
            objeto.proximosEstrenos=params.proximosEstrenos;
          }
          if(params.titenCinesulo){
            objeto.enCines=params.enCines;
          }
          this.form.patchValue(objeto);
      })
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
