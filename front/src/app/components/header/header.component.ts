import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleMenuBurgerAction } from 'src/app/actions/menuBuger.actions';
import { State } from '../../state/app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  buttonText! : String; 
  
  constructor(private store : Store<State>) { }

  handleClick(): void {
    this.store.dispatch(toggleMenuBurgerAction())
  }
}
