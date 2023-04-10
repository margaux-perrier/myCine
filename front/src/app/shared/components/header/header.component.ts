import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'; 
import { appActions } from 'src/app/state/actions';

/** 
* @description display header and dispatch toggleMenuBurgerAction when menuBurger button is clicked
* @param { State } Store
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  
  constructor(private store : Store<State>) { }

  handleClick(): void {
    this.store.dispatch(appActions.toggleMenuBurgerAction())
  }
}
