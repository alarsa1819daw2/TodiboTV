import { Component, Input, HostListener } from '@angular/core';
import { PELICULAS } from 'src/app/Models/pelicula';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  peliculas = PELICULAS;

}
