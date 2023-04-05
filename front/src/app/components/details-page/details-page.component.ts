import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable} from 'rxjs';
import { setCurrentItem } from 'src/app/actions/items.actions';
import { handleListAction } from 'src/app/actions/list.action';
import { IItem } from 'src/app/models/item';
import { getCurrentItem } from 'src/app/reducers/items.reducer';
import { getFavorisIdList, getWatchedIdList, getwhishIdList } from 'src/app/reducers/library.reducers';
import { getCurrentUrl } from 'src/app/reducers/menuburger.reducer';
import { State } from '../../state/app.state'; 
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-page',
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

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private router : Router, private store : Store<State> ) {}

  ngOnInit() : void {
    this.itemId = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.store.dispatch(setCurrentItem({ currentItemId: this.itemId })); 
    this.currentItem$ = this.store.select(getCurrentItem); 

    this.currentPage$ = this.store.select(getCurrentUrl); 

    this.favoriteValue$ = this.store.select(getFavorisIdList).pipe(
      map(ids => ids.find(id => id === this.itemId)),
    )

    this.whishValue$ = this.store.select(getwhishIdList).pipe(
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
    console.log((e.target as HTMLSelectElement).id)
    this.store.dispatch(handleListAction({ name : `${(e.target as HTMLSelectElement).id}`, idItem : this.itemId })); 
  }
}
