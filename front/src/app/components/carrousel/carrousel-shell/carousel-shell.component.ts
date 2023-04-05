import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, mergeMap, Observable, tap } from 'rxjs';
import { IItem } from 'src/app/models/item';
import { Store } from '@ngrx/store';
import { State } from '../../../state/app.state'; 
import { getCurrentIndex, getFavorisIdList } from 'src/app/reducers/library.reducers';
import { getItemList } from 'src/app/reducers/items.reducer';
import { handleNextAction } from 'src/app/actions/carrousel.action';

@Component({
  selector: 'app-carrousel-shell',
  templateUrl: './carrousel-shell.component.html',
  styleUrls: ['./carrousel-shell.component.scss']
})
export class CarrouselShellComponent implements OnInit {

  itemList$!: Observable<IItem[]>;
  currentIndex$! : Observable<number[]>; 

  constructor(private store : Store<State>) { }

  ngOnInit(): void {
    this.itemList$= combineLatest([
      this.store.select(getItemList), 
      this.store.select(getFavorisIdList), 
      this.store.select(getCurrentIndex)
    ]).pipe( 
      map(([itemList, favorisIdList, indexList]) => 
        itemList.filter( item => favorisIdList.includes(item.id))
        // .filter((item, index) => indexList.includes(index) 
      ),
      tap(data => console.log('iciiiiiiiiii', data)) 
    );

    this.currentIndex$ = this.store.select(getCurrentIndex); 
  }
}
