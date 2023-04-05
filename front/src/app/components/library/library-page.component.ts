import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItemListAction } from 'src/app/actions/items.actions';
import { State } from 'src/app/state/app.state';
import { getShowMenuBurgerProperty } from '../../reducers/menuburger.reducer';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  constructor(private store : Store<State>) { }
  isMenuBurgerOpen$! : Observable<boolean>; 

  ngOnInit(): void {
    this.store.dispatch(loadItemListAction()); 
    this.isMenuBurgerOpen$ = this.store.select(getShowMenuBurgerProperty); 
  }

}
