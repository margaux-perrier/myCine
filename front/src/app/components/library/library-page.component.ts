import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { loadItemListAction } from 'src/app/actions/items.actions';
import { getShowMenuBurgerProperty } from '../../reducers/app.reducer';
import { IItem } from 'src/app/models/item';
import { getFavorisList, getWatchedList, getWishList } from 'src/app/reducers/library.reducers';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  isMenuBurgerOpen$! : Observable<boolean>; 
  favorisList$!: Observable<IItem[]>; 
  watchedList$!: Observable<IItem[]>;
  wishList$!: Observable<IItem[]>;

  constructor(private store : Store<State>) { }
 
  ngOnInit(): void {
    this.store.dispatch(loadItemListAction()); 
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
    this.favorisList$ = this.store.select(getFavorisList); 
    this.watchedList$ = this.store.select(getWatchedList); 
    this.wishList$ = this.store.select(getWishList); 
  }

}
