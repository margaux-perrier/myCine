import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  star = faStar; 
  constructor() { }

  ngOnInit(): void {
  }

}
