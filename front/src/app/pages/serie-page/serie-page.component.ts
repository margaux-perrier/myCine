import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/core/models/item';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { appSelectors } from 'src/app/state/app';
import { itemsActions, itemsSelectors } from 'src/app/state/items';
import { filterActions } from 'src/app/state/filter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serie-page',
  templateUrl: './serie-page.component.html',
  styleUrls: ['./serie-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriePageComponent implements OnInit {

 constructor(private store : Store<State>, private route : Router) { }
  isMenuBurgerOpen$! : Observable<boolean>; 
  moviesList$ ! : Observable<IItem[]>; 
  seriesList$ ! : Observable<IItem[]>; 
  currentUrl! : string; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(appSelectors.getShowMenuBurgerProperty); 
    this.store.dispatch(filterActions.resetFilter()); 
    this.store.dispatch(itemsActions.loadItemListAction());  
    this.currentUrl = this.route.url; 
    console.log('currentUrl', this.currentUrl)
    console.log('ICCCCCCCCCCCCCCCCCCCCCI')
    this.seriesList$ = this.store.select(itemsSelectors.getSeriesList); 
  }
}
