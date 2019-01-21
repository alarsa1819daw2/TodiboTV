import { Component, Input, OnInit } from '@angular/core';
import { Pelicula, PELICULAS } from 'src/app/Models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{

  @Input() pelicula: Pelicula;

  pelisFav: string[];
  cont: number = 0;

  clickFav() {
    console.log(this.cont);
    localStorage.setItem(this.cont.toString(), this.pelicula.name);
    this.cont = this.cont +1;
  }
}
