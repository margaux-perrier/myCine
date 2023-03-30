import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShowMenuBurgerProperty } from '../../reducers/menuburger.reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  isMenuBurgerOpen$!: Observable<boolean>;
  
  constructor(private store : Store<any>) { }
  isMenuBurgerOpen! : boolean; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
  }
}
