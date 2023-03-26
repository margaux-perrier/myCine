import { Component, Input, OnInit } from '@angular/core';
import {faStar, faBookBookmark, faThumbsUp} from '@fortawesome/free-solid-svg-icons'; 
import {faHeart as emptyHeart, faBookmark as empltyBookMark} from '@fortawesome/free-regular-svg-icons'; 
import { IItem } from 'src/app/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  star = faStar; 
  heart = emptyHeart;
  bookmark = empltyBookMark;  
  thumbUp = faThumbsUp; 

  @Input() item! : IItem; 

  constructor() { }

  ngOnInit(): void {}

}
