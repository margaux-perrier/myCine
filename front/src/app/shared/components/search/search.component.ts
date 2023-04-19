import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'; 
import { ItemsService } from 'src/app/core/services/items/items.service';
import { filterActions } from 'src/app/state/filter';

/**
* @description Display searchBar and filter component. Handle search elements with searchBar, filterMenu opening and filter reseting (reset button). 
* @param { State } Store
* @param { itemsService } itemService 
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
 
  searchBarValue : string = ''; 
  isFilterMenuOpen: boolean = false; 
  buttonText! : String; 
  
  @Output() searchValueChanged : EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private store : Store<State>, private itemService : ItemsService) {}
  
  onSearchValueChanged() {
    
    //SEARCH PIPE 
    // this.searchValueChanged.emit(this.searchBarValue)

    this.itemService.onSearchItems(this.searchBarValue)
    
  }

  handleFilterMenuOpening(){
    this.isFilterMenuOpen = !this.isFilterMenuOpen
  }

  resetFilter(){
    this.store.dispatch(filterActions.resetFilter())
  }

}
