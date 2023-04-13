import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IGenre } from 'src/app/core/models/genre';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state'; 
import { filterSelectors, filterActions } from 'src/app/state/filter';

/**
* @description display filter categories and handle items filtering : dispatch selectedGenreAction when a genre is selected. 
* @param { State } Store
*/
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  constructor(private store : Store<State>) { }
  
  errorMessage$! : Observable<string>;
  genreList$! : Observable<IGenre[]>; 
 
  onSelected(e : Event){
    this.store.dispatch(filterActions.selectedGenreAction({ selectedGenreId : Number((e.target as HTMLSelectElement).id)})); 
  }

  ngOnInit(): void {
    this.store.dispatch(filterActions.loadFilterListAction());  
    this.genreList$ = this.store.select(filterSelectors.getGenreList); 
    this.errorMessage$ = this.store.select(filterSelectors.getErrorGenre); 
  }

}
