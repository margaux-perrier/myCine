import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { IItem } from 'src/app/core/models/item';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'; 
import { itemsReducer } from 'src/app/state/reducers';

/**
* @description Display itemList 
* @param { Observable<IItem[]> } itemList
* @param { State } store 
*/
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  errorMessage$!: Observable<string>; 
  searchValue = ''; 
  @Input() itemList$!: Observable<IItem[]>;

  constructor( private store : Store<State> ){}
  
  ngOnInit(): void {
    // this.store.dispatch(loadItemListAction());  
    this.errorMessage$ = this.store.select(itemsReducer.getErrorItems); 
  }
  
  onSearchTextEnter(searchText : string):void{
    this.searchValue = searchText; 
  }
  
}
