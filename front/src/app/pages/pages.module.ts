import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { StoreModule } from '@ngrx/store';
import { itemListReducer } from '../state/reducers/items.reducer';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LibraryModule } from './library-page/library.module';
import { EffectsModule } from '@ngrx/effects';
import { itemListEffects } from '../state/effects/items.effects'; 
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MoviePageComponent, 
    DetailsPageComponent,
    HomePageComponent, 
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    RatingModule,
    BrowserAnimationsModule, 
    FormsModule, 
    LibraryModule,
    AppRoutingModule,
    StoreModule.forFeature('items', itemListReducer),
    EffectsModule.forFeature([itemListEffects])
  ],
  exports : [
    MoviePageComponent, 
    DetailsPageComponent,
  ]
})
export class PagesModule { }
