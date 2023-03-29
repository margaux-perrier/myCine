import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faSearch, faFilter, faRotateLeft} from '@fortawesome/free-solid-svg-icons'


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
  isFilterMenuOpen: boolean = true; 

  @Output()
  searchValueChanged : EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }
  
  onSearchValueChanged() {
    this.searchValueChanged.emit(this.searchBarValue)
  }

  handleFilterMenu(){
    this.isFilterMenuOpen = !this.isFilterMenuOpen
  }

  ngOnInit(): void {
    console.log(this.searchBarValue)
  }

  

}
