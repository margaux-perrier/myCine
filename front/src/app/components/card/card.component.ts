import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'; 
import {faHeart as emptyHeart, faBookmark as empltyBookMark} from '@fortawesome/free-regular-svg-icons'; 
import { IItem } from '../../models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class CardComponent implements OnInit {
  heart = emptyHeart;
  bookmark = empltyBookMark;  
  thumbUp = faThumbsUp; 

  @Input() item! : IItem; 

  constructor() { }

  ngOnInit(): void {}

}
