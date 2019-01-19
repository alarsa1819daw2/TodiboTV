import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FilterPipe } from './filter.pipe';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { MatVideoModule } from 'mat-video';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
