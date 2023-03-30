import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'; 
import { catchError, EMPTY, Observable, tap} from 'rxjs';
import { loadItemListAction } from 'src/app/actions/items.actions';
import { getItemList } from 'src/app/reducers/items.reducer';
import { ItemsService } from 'src/app/services/items/items.service';
import { IItem } from 'src/app/models/item';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  errorMessage = ''; 
  searchValue = ''; 
  itemList$!: Observable<IItem[]>;

  constructor(private itemsService: ItemsService, private store : Store<State>){}

  // itemWithProducerList$ = this.itemsService.filteredItems$.pipe(
  //   catchError(err => {
  //     this.errorMessage = err; 
  //     return EMPTY; 
  //   })
  // ); 
  
  ngOnInit(): void {
    this.store.dispatch(loadItemListAction());  
    this.itemList$ = this.store.select(getItemList).pipe(
      tap(data => console.log('ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', data))
    )
  }
  
  



  
  

  onSearchTextEnter(searchText : string):void{
    this.searchValue = searchText; 
  }
  
}
