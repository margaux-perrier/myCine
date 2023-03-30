import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'; 
import {faSearch, faFilter, faRotateLeft} from '@fortawesome/free-solid-svg-icons'
import { resetFilter } from 'src/app/actions/filter.action';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchIcon = faSearch; 
  filterIcon = faFilter;
  resetIcon = faRotateLeft; 
  searchBarValue : string = ''; 
  isFilterMenuOpen: boolean = false; 

  @Output() searchValueChanged : EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private store : Store<State>) {}
  
  onSearchValueChanged() {
    this.searchValueChanged.emit(this.searchBarValue)
  }

  handleFilterMenu(){
    this.isFilterMenuOpen = !this.isFilterMenuOpen
  }

  resetFilter(){
    console.log('test'); 
    this.store.dispatch(resetFilter())
  }

  ngOnInit(): void {
    console.log(this.searchBarValue)
  }

  

}
