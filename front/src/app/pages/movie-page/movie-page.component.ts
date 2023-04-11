import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/core/models/item';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { appReducer, itemsReducer } from 'src/app/state/reducers';
import { itemsActions } from 'src/app/state/actions';

/**
* @description display moviesList 
* @param { State } Store
*/
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePageComponent implements OnInit {
   
  constructor(private store : Store<State>) { }
  isMenuBurgerOpen$! : Observable<boolean>; 
  itemList$ ! : Observable<IItem[]>; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(appReducer.getShowMenuBurgerProperty); 
    this.store.dispatch(itemsActions.loadItemListAction());  
    this.itemList$ = this.store.select(itemsReducer.getMoviesList); 
  }
}
