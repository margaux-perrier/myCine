import { Component, OnInit} from '@angular/core';
import { toggleMenuBurgerAction } from '../../actions/menuBuger.actions'; 
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent implements OnInit {
  
  constructor(private store : Store<any>) { }

  handleClick(): void {
    this.store.dispatch(toggleMenuBurgerAction())
    //SANS REDUX
    // this.MenuBurgerService.changeMenuBurgerState(false); 
  }

  ngOnInit(): void {
  }

}
