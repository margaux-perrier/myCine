import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuBurgerService } from '../menu-burger/menu-burger.service'; 

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent implements OnInit {
  
  constructor(private MenuBurgerService : MenuBurgerService) { }

  handleClick(): void {
    this.MenuBurgerService.changeMenuBurgerState(false); 
    console.log('header click', this.MenuBurgerService.isMenuBurgerOpen); 
  }

  ngOnInit(): void {
  }

}
