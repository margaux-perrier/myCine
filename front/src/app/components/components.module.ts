import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardComponent } from './card/card.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CardListComponent } from './card-list/card-list.component';
import { SearchComponent } from './search/search.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    CarrouselComponent,
    CardComponent,
    MoviePageComponent,
    NotFoundPageComponent,
    CardListComponent,
    SearchComponent,
    MenuBurgerComponent,
    SearchPipe
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule, 
    FormsModule, 
  ]
})
export class ComponentsModule { }
