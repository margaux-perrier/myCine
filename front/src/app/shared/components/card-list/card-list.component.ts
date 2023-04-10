import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../state/app.state'; 
import { Observable } from 'rxjs';
import { getErrorItems } from '../../../state/reducers/items.reducer';
import { IItem } from 'src/app/core/models/item';

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
    this.errorMessage$ = this.store.select(getErrorItems); 
  }
  
  onSearchTextEnter(searchText : string):void{
    this.searchValue = searchText; 
  }
  
}
