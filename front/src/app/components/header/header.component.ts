import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { MenuBurgerService } from '../menu-burger/menu-burger.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menuBurgerIcon = faBars; 

  constructor(private MenuBurgerService : MenuBurgerService) { }

  ngOnInit(): void {
    console.log('header init', this.MenuBurgerService.isMenuBurgerOpen); 
  }

  handleClick(): void {
    this.MenuBurgerService.changeMenuBurgerState(true); 
    console.log('header click', this.MenuBurgerService.isMenuBurgerOpen); 
  }

}
