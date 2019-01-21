import { Component, OnInit } from '@angular/core';
import { PELICULAS } from 'src/app/Models/pelicula';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{

  peliculas = PELICULAS;

  proba: string;
  pelisFav: string[];
  
  constructor() {
    this.pelisFav = [];
  }

  ngOnInit(){
    for(var i=0;i<50;i++) {
      this.proba = localStorage.getItem(i.toString());
      if (!this.proba){
        console.log("if" + this.proba);
      }else{
        console.log("elseee" + this.proba);
        this.pelisFav.push(this.proba);
      } 
    }     
  }

  clickBorrarFav() {
    for(var i=0;i<50;i++) {
      localStorage.removeItem(i.toString());
    }
    this.pelisFav = [];
  }

}
