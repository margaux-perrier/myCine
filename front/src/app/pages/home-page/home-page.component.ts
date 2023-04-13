import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'; 
import { appSelectors } from 'src/app/state/app';

/**
* @description display homePage 
* @param { State } Store
*/
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  isMenuBurgerOpen$!: Observable<boolean>;
  
  constructor(private store : Store<State>) { }
 
  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(appSelectors.getShowMenuBurgerProperty); 
  }
}
