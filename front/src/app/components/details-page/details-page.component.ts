import { Component, OnInit } from '@angular/core';
import {faThumbsUp, faStar} from '@fortawesome/free-solid-svg-icons'; 
import {faHeart as emptyHeart, faBookmark as emptyBookMark, faStar as emptyStar, faThumbsUp as emptyThumbsUp} from '@fortawesome/free-regular-svg-icons'; 

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  heart = emptyHeart;
  bookmark = emptyBookMark;  
  thumbUp = emptyThumbsUp; 
  star = emptyStar; 

  constructor() { }

  ngOnInit(): void {
  }

}
