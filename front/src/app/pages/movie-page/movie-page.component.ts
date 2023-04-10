import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { getShowMenuBurgerProperty } from '../../state/reducers/app.reducer';
import { IItem } from 'src/app/core/models/item';
import { getMoviesList } from '../../state/reducers/items.reducer';
import { loadItemListAction } from '../../state/actions/items.actions';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
   
  constructor(private store : Store<State>) { }
  isMenuBurgerOpen$! : Observable<boolean>; 
  itemList$ ! : Observable<IItem[]>; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
    this.store.dispatch(loadItemListAction());  
    this.itemList$ = this.store.select(getMoviesList); 
  }
}
