import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/core/models/item';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { appActions } from 'src/app/state/actions';


/** 
* @description Display one item and set current url in the store when user click on the card
* @param { Observable<IItem> } item
* @param { State } store 
*/
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class CardComponent {
  @Input() item! : IItem; 

  constructor(private route : Router, private store : Store<State>){}

  /** 
  *@function handleCurrentRoute set current url in the store
  */
  handleCurrentRoute() : void {
    this.store.dispatch(appActions.handleCurrentRouteAction( { url : this.route.url }));
  }
}
