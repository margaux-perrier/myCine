import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
