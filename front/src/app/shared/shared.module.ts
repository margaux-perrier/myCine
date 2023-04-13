import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component'; 
import { SearchComponent } from './components/search/search.component';
import { TagComponent } from './components/tag/tag.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ButtonComponent } from './components/button/button.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { SearchPipe } from './pipes/search/search-pipe.pipe';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { filterReducer } from '../state/filter/reducer/filter.reducer';
import { filterListEffects } from '../state/filter/effect/filter.effects';

@NgModule({
  declarations: [
    CardComponent, 
    CarrouselComponent, 
    CardListComponent, 
    FilterComponent, 
    FooterComponent, 
    HeaderComponent, 
    MenuBurgerComponent, 
    SearchComponent, 
    TagComponent, 
    ButtonComponent,
    PaginationComponent,
    SearchPipe,
    DurationPipe,
  ],
  imports: [
    CommonModule, 
    CarouselModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    RatingModule,
    StoreModule.forFeature('filter', filterReducer),
    EffectsModule.forFeature([filterListEffects ]) 
  ],
  exports : [
    CardComponent, 
    CarrouselComponent,
    CardListComponent, 
    FilterComponent, 
    FooterComponent, 
    HeaderComponent, 
    MenuBurgerComponent, 
    SearchComponent, 
    TagComponent, 
    ButtonComponent,
    PaginationComponent,
    SearchPipe,
    DurationPipe,
  ]
})
export class SharedModule { }
