import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'; 
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons'; 
import { MenuBurgerService } from '../../services/menu-burger.service'; 

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  filterIcon = faFilter;
  resetIcon = faRotateLeft; 
   
  constructor(private MenuBurgerService : MenuBurgerService) { }
  isMenuBurgerOpen! : boolean; 

  ngOnInit(): void {
    this.MenuBurgerService.handleMenuBurgerState.subscribe(isOpen => {
      this.isMenuBurgerOpen = isOpen;
    });
  }

}
