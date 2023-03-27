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

  searchBarValue : string = 'test'; 

  @Output()
  searchValueChanged : EventEmitter<string> = new EventEmitter<string>(); 


 onSearchValueChanged() {
  this.searchValueChanged.emit(this.searchBarValue)
 }

  constructor() { }

  ngOnInit(): void {
    console.log(this.searchBarValue)
  }

}
