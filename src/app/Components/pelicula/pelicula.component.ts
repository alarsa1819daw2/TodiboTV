import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{

  @Input() pelicula: Pelicula;

}
