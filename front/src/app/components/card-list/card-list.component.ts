import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'; 
import { Observable } from 'rxjs';
import { loadItemListAction } from 'src/app/actions/items.actions';
import { getErrorItems, getItemList } from 'src/app/reducers/items.reducer';
import { IItem } from 'src/app/models/item';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  errorMessage$!: Observable<string>; 
  searchValue = ''; 
  itemList$!: Observable<IItem[]>;
  // currentPage : number = 1; 

  constructor( private store : Store<State> ){}
  
  ngOnInit(): void {
    this.store.dispatch(loadItemListAction());  
    this.itemList$ = this.store.select(getItemList); 
    this.errorMessage$ = this.store.select(getErrorItems); 
  }
  
  onSearchTextEnter(searchText : string):void{
    this.searchValue = searchText; 
  }

  // changePage(page: number): void {
  //   this.currentPage = page;
  // }
  
}
