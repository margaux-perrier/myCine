import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'; 
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons'; 
import { Store } from '@ngrx/store';
import { getShowMenuBurgerProperty } from '../menu-burger/menuburger.reducer';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  filterIcon = faFilter;
  resetIcon = faRotateLeft; 
   
  constructor(private store : Store<any>) { }
  isMenuBurgerOpen! : boolean; 

  //TO DO UNSUBSCRIBE
  ngOnInit(): void {
    this.store.select(getShowMenuBurgerProperty).subscribe(
      showMenuBurger => this.isMenuBurgerOpen = showMenuBurger
    )
    //SANS REDUX
    // this.MenuBurgerService.handleMenuBurgerState.subscribe(isOpen => {
    //   this.isMenuBurgerOpen = isOpen;
    // });
  }

}
