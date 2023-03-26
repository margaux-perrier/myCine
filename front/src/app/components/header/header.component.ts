import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { MenuBurgerService } from '../../services/menu-burger.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  menuBurgerIcon = faBars; 

  constructor(private MenuBurgerService : MenuBurgerService) { }

  handleClick(): void {
    this.MenuBurgerService.changeMenuBurgerState(true); 
  }

}
