import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'
import { appActions } from 'src/app/state/app';

/**
* @description display MenuBurger and dispatch toggleMenuBurgerAction when menuBurger close button is clicked
* @param {State} Store
*/
@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent  {
 
  constructor(private store : Store<State>) { }

  handleClick(): void {
    this.store.dispatch(appActions.toggleMenuBurgerAction())
  }
}
