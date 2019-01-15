import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { FilterPipe } from './filter.pipe';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    FilterPipe,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
