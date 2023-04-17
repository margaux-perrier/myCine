import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TagComponent } from './components/tag/tag.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ButtonComponent } from './components/button/button.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { SearchPipe } from './pipes/search/search-pipe.pipe';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { FilterModule } from './components/filter/filter.module';

@NgModule({
  declarations: [
    CardComponent, 
    CarrouselComponent, 
    CardListComponent, 
    FooterComponent, 
    HeaderComponent, 
    SearchComponent, 
    TagComponent, 
    ButtonComponent,
    SearchPipe,
    DurationPipe,
  ],
  imports: [
    CommonModule, 
    CarouselModule,
    FilterModule, 
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    RatingModule, 
  ],
  exports : [
    CommonModule, 
    FormsModule, 
    CardComponent, 
    CarrouselComponent,
    CardListComponent, 
    FooterComponent, 
    HeaderComponent, 
    SearchComponent, 
    TagComponent, 
    ButtonComponent,
    SearchPipe,
    DurationPipe,
  ]
})
export class SharedModule { }
