import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsPageComponent } from './items-page/items-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { StoreModule } from '@ngrx/store';
import { itemListReducer } from '../state/items/reducer/items.reducer';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LibraryModule } from './library-page/library.module';
import { EffectsModule } from '@ngrx/effects';
import { itemListEffects } from '../state/items/effect/items.effects'; 
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBurgerModule } from '../shared/components/menu-burger/menu-burger.module';

@NgModule({
  declarations: [
    ItemsPageComponent, 
    DetailsPageComponent,
    HomePageComponent, 
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    RatingModule,
    MenuBurgerModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    LibraryModule,
    AppRoutingModule,
    StoreModule.forFeature('items', itemListReducer),
    EffectsModule.forFeature([itemListEffects])
  ],
  exports : [
    ItemsPageComponent, 
    DetailsPageComponent,
    HomePageComponent, 
    NotFoundPageComponent,
  ]
})
export class PagesModule { }
