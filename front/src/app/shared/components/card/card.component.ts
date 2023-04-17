import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/core/models/item';

/** 
* @description Display one card item
* @param { Observable<IItem> } item
*/
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class CardComponent {
  @Input() item! : IItem; 

  constructor(private route : Router){}

  onClick(id : number) : void {
    this.route.navigate([this.route.url, id ]);
  }
  
}
