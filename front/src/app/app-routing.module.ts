import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { LibraryPageComponent } from './components/library/library-page.component';

const routes: Routes = [
  { path : '', component : HomePageComponent }, 
  { path : 'movies', component : MoviePageComponent },
  { path : 'series', component : MoviePageComponent },
  { path : 'movies/:id', component : DetailsPageComponent }, 
  { path : 'library', component : LibraryPageComponent }, 
  { path : '**', component : NotFoundPageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
