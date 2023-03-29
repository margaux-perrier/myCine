import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { getShowMenuBurgerProperty } from '../menu-burger/menuburger.reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  constructor(private store : Store<any>) { }
  isMenuBurgerOpen! : boolean; 

  ngOnInit(): void {
    //TO DO UNSUBSCRIBE
    this.store.select(getShowMenuBurgerProperty).subscribe(
      showMenuBurger => this.isMenuBurgerOpen = showMenuBurger
    )
    //SANS REDUX
    // this.MenuBurgerService.handleMenuBurgerState.subscribe(isOpen => {
    //   this.isMenuBurgerOpen = isOpen;
    // });
  }

}
