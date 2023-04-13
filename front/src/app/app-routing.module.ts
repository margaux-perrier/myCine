import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { SeriePageComponent } from './pages/serie-page/serie-page.component';

const routes: Routes = [
  { path : '', component : HomePageComponent }, 
  { path : 'movies', component : MoviePageComponent },
  { path : 'series', component : SeriePageComponent },
  { path : 'movies/:id', component : DetailsPageComponent }, 
  { path : 'library', component : LibraryPageComponent }, 
  { path : '**', component : NotFoundPageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
