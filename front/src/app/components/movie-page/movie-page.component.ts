import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'; 
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { getShowMenuBurgerProperty } from '../../reducers/menuburger.reducer';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
   
  constructor(private store : Store<State>) { }
  isMenuBurgerOpen$! : Observable<boolean>; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
  }

}
