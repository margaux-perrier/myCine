import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../state/app.state'; 
import { resetFilter } from 'src/app/state/actions/filter.action';
import { ItemsService } from 'src/app/core/services/items/items.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 
  searchBarValue : string = ''; 
  isFilterMenuOpen: boolean = false; 
  buttonText! : String; 
  
  @Output() searchValueChanged : EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private store : Store<State>, private itemService : ItemsService) {}
  
  onSearchValueChanged() {
    // this.searchValueChanged.emit(this.searchBarValue)
    this.itemService.onSearchItems(this.searchBarValue)
  }

  handleFilterMenu(){
    this.isFilterMenuOpen = !this.isFilterMenuOpen
  }

  resetFilter(){
    this.store.dispatch(resetFilter())
  }

  ngOnInit(): void {}

  

}
