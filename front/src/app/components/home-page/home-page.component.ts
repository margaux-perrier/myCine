import { Component, OnChanges, OnInit} from '@angular/core';
import { MenuBurgerService } from '../menu-burger/menu-burger.service'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  constructor(private MenuBurgerService : MenuBurgerService) { }
  isMenuBurgerOpen! : boolean; 

  ngOnInit(): void {
    this.MenuBurgerService.handleMenuBurgerState.subscribe(isOpen => {
      this.isMenuBurgerOpen = isOpen;
    });
  }

}
