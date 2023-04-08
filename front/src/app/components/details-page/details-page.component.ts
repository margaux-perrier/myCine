import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap} from 'rxjs';
import { loadItemListAction, setCurrentItem, setRatingItem } from 'src/app/actions/items.actions';
import { handleListAction } from 'src/app/actions/list.action';
import { IItem } from 'src/app/models/item';
import { getCurrentItem } from 'src/app/reducers/items.reducer';
import { getFavorisIdList, getWatchedIdList, getWishIdList } from 'src/app/reducers/library.reducers';
import { getCurrentUrl } from 'src/app/reducers/app.reducer';
import { State } from '../../state/app.state'; 
import { Location } from '@angular/common'; 
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  name! : string; 
  currentItem$! : Observable<IItem | null | undefined>; 
  favoriteValue$! :  Observable<number | undefined>; 
  whishValue$! :  Observable<number | undefined>; 
  watchedValue$! :  Observable<number | undefined>; 
  currentPage$! : Observable<string>; 
  itemId! : number; 
  isRatingOpen : boolean = false; 
  ratingValue : number = 0; 

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private store : Store<State> ) {}

  ngOnInit() : void {
    this.itemId = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.store.dispatch(setCurrentItem({ currentItemId: this.itemId })); 
    this.store.dispatch(loadItemListAction()); 
    this.currentItem$ = this.store.select(getCurrentItem); 

    this.currentPage$ = this.store.select(getCurrentUrl); 

    this.favoriteValue$ = this.store.select(getFavorisIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )

    this.whishValue$ = this.store.select(getWishIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )
    
    this.watchedValue$ = this.store.select(getWatchedIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )
  }

  handleClose() : void{
    this.location.back()
  }

  handleClick(e : Event){
    this.store.dispatch(handleListAction({ name : `${(e.target as HTMLSelectElement).id}`, idItem : this.itemId })); 
  }

  handleRatingOpening(){
    this.isRatingOpen = !this.isRatingOpen; 
  }
  handleRating(){
    console.log(this.ratingValue)
    this.isRatingOpen ? this.store.dispatch(setRatingItem({ ratingValue : this.ratingValue})) : null
  }
}

