import { Component } from '@angular/core';
import { PELICULAS } from 'src/app/Models/pelicula';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  peliculas = PELICULAS;
}
