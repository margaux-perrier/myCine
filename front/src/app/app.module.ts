import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { DataService } from './data/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardComponent } from './components/card/card.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchComponent } from './components/search/search.component';
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
