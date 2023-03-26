import { ChangeDetectionStrategy, Component} from '@angular/core';
import { catchError, combineLatest, EMPTY, Observable } from 'rxjs';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class CardListComponent {

  errorMessage = ''; 
  constructor(private itemsService: ItemsService) { }

  itemWithProducerList$ = this.itemsService.itemWithProducerList$.pipe(
    catchError(err => {
      this.errorMessage = err; 
      return EMPTY; 
    })
  ); 
  
}
