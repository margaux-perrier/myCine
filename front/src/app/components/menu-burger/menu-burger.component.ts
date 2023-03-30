import { Component, OnInit} from '@angular/core';
import { toggleMenuBurgerAction } from '../../actions/menuBuger.actions'; 
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent implements OnInit {
  
  constructor(private store : Store<State>) { }

  handleClick(): void {
    this.store.dispatch(toggleMenuBurgerAction())
  }

  ngOnInit(): void {
  }

}
