import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatVideoModule } from 'mat-video';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { NavMenuComponent } from './Components/navmenu/navmenu.component';
import { LoginComponent } from './Components/login/login.component';
import { VideoComponent } from './Components/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    PeliculaComponent,
    NavMenuComponent,
    LoginComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatVideoModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent}, //, canActivate: [AuthGuard]},
      { path: 'video', component: VideoComponent},
      { path: '**', redirectTo: 'login' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
