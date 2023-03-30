import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'; 
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShowMenuBurgerProperty } from '../../reducers/menuburger.reducer';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  filterIcon = faFilter;
  resetIcon = faRotateLeft; 
   
  constructor(private store : Store<any>) { }
  isMenuBurgerOpen$! : Observable<boolean>; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
  }

}
