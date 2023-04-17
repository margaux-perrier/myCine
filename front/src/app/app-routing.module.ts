import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';

const routes: Routes = [
  { path : '', component : HomePageComponent }, 
  { path : 'movies', component : ItemsPageComponent, 
    children : [
      { path : ':id', component : DetailsPageComponent }, 
    ]
  },
  { path : 'series', component :  ItemsPageComponent, 
    children : [
    { path : ':id', component : DetailsPageComponent }, 
   ] 
  },
  { path : 'library', component : LibraryPageComponent, 
    children : [
    { path : ':id', component : DetailsPageComponent }, 
   ] 
  }, 
  { path : '**', component : NotFoundPageComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
