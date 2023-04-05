import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, mergeMap, Observable, tap } from 'rxjs';
import { IItem } from 'src/app/models/item';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'; 
import { getFavorisIdList } from 'src/app/reducers/library.reducers';
import { getItemList } from 'src/app/reducers/items.reducer';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  itemList$!: Observable<IItem[]>;
  
  constructor(private store : Store<State>) { }

  ngOnInit(): void {
    this.itemList$= combineLatest([
      this.store.select(getItemList), 
      this.store.select(getFavorisIdList)
    ]).pipe( 
      map(([itemList, favorisIdList]) => 
        itemList.filter( item => favorisIdList.includes(item.id)
      )),
      tap(data => console.log('iciiiiiiiiii', data)) 
    );
  }
  

}
