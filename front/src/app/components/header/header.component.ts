import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { toggleMenuBurgerAction } from 'src/app/actions/menuBuger.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  menuBurgerIcon = faBars; 

  constructor(private store : Store<any>) { }

  handleClick(): void {
    this.store.dispatch(toggleMenuBurgerAction())
    //SANS REDUX
    // this.MenuBurgerService.changeMenuBurgerState(true); 
  }
}
