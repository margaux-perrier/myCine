import { ChangeDetectionStrategy, Component} from '@angular/core';
import { catchError, EMPTY} from 'rxjs';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  errorMessage = ''; 
  searchValue = ''; 
  constructor(private itemsService: ItemsService) { }

  
  itemWithProducerList$ = this.itemsService.filteredItems$.pipe(
    catchError(err => {
      this.errorMessage = err; 
      return EMPTY; 
    })
  ); 
  
  onSearchTextEnter(searchText : string):void{
    this.searchValue = searchText; 
  }
  
}
