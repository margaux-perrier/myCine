import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { appSelectors } from 'src/app/state/app';
import { itemsActions } from 'src/app/state/items';
import { librarySelectors } from 'src/app/state/library';
import { IItem } from 'src/app/core/models/item';


/**
* @description display favorisList, watchedList and wishList
* @param { State } Store
*/
@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryPageComponent implements OnInit {

  isMenuBurgerOpen$! : Observable<boolean>; 
  favorisList$!: Observable<IItem[]>; 
  watchedList$!: Observable<IItem[]>;
  wishList$!: Observable<IItem[]>;

  constructor(private store : Store<State>) { }
 
  ngOnInit(): void {
    this.store.dispatch(itemsActions.loadItemListAction()); 
    this.isMenuBurgerOpen$ = this.store.select(appSelectors.getShowMenuBurgerProperty); 
    this.favorisList$ = this.store.select(librarySelectors.getFavorisList); 
    this.watchedList$ = this.store.select(librarySelectors.getWatchedList); 
    this.wishList$ = this.store.select(librarySelectors.getWishList); 
  }

}
