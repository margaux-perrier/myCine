import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'; 
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  filterIcon = faFilter;
  resetIcon = faRotateLeft; 
   
  constructor() { }

  ngOnInit(): void {
  }

}
