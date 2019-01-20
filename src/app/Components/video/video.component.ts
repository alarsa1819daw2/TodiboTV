import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Models/pelicula';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{
  @Input() pelicula: Pelicula;

  name:string;

}