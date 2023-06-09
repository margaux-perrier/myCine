import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { IItem } from 'src/app/core/models/item';
import { State } from 'src/app/state/app.state'; 
import { itemsActions, itemsSelectors } from 'src/app/state/items';
import { libraryActions, librarySelectors } from 'src/app/state/library';

/**
* @description Display item's details. Handle favorisList, wishList, watchedList and rating. 
  When user click on icon, the handleListAction is dispatch. 
  When user rate the item, the setRatingItemAction is dispatch
* @param { State } Store
* @param { ActivatedRoute } ActivatedRoute 
* @param { Location } location
*/
@Component({
  selector: 'app-details-page',
  animations : [
    trigger('openClose', [
      state('open', style({ opacity:1, zIndex: 1})),
      state('close', style({ width : '180px', opacity:0})),
      transition(':leave', [
        style({ borderRadius : '0px 25px 25px 0px'}),
        animate('1000ms ease-in')
      ]),
      transition('open => close', [
        animate('1000ms ease-in')
      ]),
      transition('close => open', [
        animate('500ms ease-out')
      ]),
    ]),
  ], 
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent implements OnInit {

  name! : string; 
  currentItem$! : Observable<IItem | null | undefined>; 
  favoriteValue$! :  Observable<number | undefined>; 
  wishValue$! :  Observable<number | undefined>; 
  watchedValue$! :  Observable<number | undefined>; 
  itemId! : number; 
  isRatingOpen : boolean = false; 
  ratingValue : number = 0; 

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private store : Store<State> ) {}

  ngOnInit() : void {
    this.itemId = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.store.dispatch(itemsActions.setCurrentItem({ currentItemId: this.itemId })); 
    this.store.dispatch(itemsActions.loadItemListAction()); 
    this.currentItem$ = this.store.select(itemsSelectors.getCurrentItem); 
      
    this.favoriteValue$ = this.store.select(librarySelectors.getFavorisIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )

    this.wishValue$ = this.store.select(librarySelectors.getWishIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )
    
    this.watchedValue$ = this.store.select(librarySelectors.getWatchedIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )
  }

  handleClose() : void{
    this.location.back(); 
  }

  handleClick(e : Event){
    this.store.dispatch(libraryActions.handleListAction({ name : `${(e.target as HTMLSelectElement).id}`, idItem : this.itemId })); 
  }

  handleRatingOpening() : void {
    this.isRatingOpen = !this.isRatingOpen; 
  }

  handleRating(){
    this.store.dispatch(itemsActions.setRatingItem({ ratingValue : this.ratingValue}))
  }
}

