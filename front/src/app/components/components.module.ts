import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { menuburgerReducer } from '../reducers/menuburger.reducer';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SearchPipe } from '../pipes/search/search-pipe.pipe';
import { DurationPipe } from '../pipes/duration/duration.pipe';
import { itemListReducer } from '../reducers/items.reducer';
import { filterReducer } from '../reducers/filter.reducer';
import { libraryReducer } from '../reducers/library.reducers'; 
import { EffectsModule } from '@ngrx/effects';
import { itemListEffects } from '../effects/items.effects';
import { filterListEffects } from '../effects/filter.effects';
import { DetailsPageComponent } from './details-page/details-page.component';
import { StarsComponent } from './stars/stars.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CardComponent, 
    CardListComponent, 
    FilterComponent, 
    FooterComponent, 
    HeaderComponent, 
    MenuBurgerComponent, 
    SearchComponent, 
    TagComponent, 
    HomePageComponent, 
    MoviePageComponent, 
    NotFoundPageComponent,
    SearchPipe,
    DurationPipe,
    DetailsPageComponent,
    StarsComponent,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    FontAwesomeModule, 
    AppRoutingModule,
    StoreModule.forFeature('menuburger', menuburgerReducer), 
    StoreModule.forFeature('items', itemListReducer),
    StoreModule.forFeature('filter', filterReducer),
    StoreModule.forFeature('library', libraryReducer),
    EffectsModule.forFeature([itemListEffects, filterListEffects ])
  ]
})
export class ComponentsModule { }
