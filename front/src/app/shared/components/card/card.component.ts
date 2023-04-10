import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../state/app.state'; 
import { IItem } from '../../../core/models/item';
import { handleCurrentRouteAction } from '../../../state/actions/app.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class CardComponent {
  @Input() item! : IItem; 

  constructor(private route : Router, private store : Store<State>){}

  handleCurrentRoute() : void {
    this.store.dispatch(handleCurrentRouteAction( { url : this.route.url }));
  }
}
