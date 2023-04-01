import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state'; 
import {Observable} from 'rxjs';
import { loadFilterListAction, selectedGenreAction } from 'src/app/actions/filter.action';
import { IGenre } from 'src/app/models/genre';
import { getErrorGenre, getGenreList, getSelectedGenreIdList } from 'src/app/reducers/filter.reducer';

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
    this.store.dispatch(selectedGenreAction({ selectedGenreId : Number((e.target as HTMLSelectElement).id)})); 
    this.store.select(getSelectedGenreIdList); 
  }

  ngOnInit(): void {
    this.store.dispatch(loadFilterListAction());  
    this.genreList$ = this.store.select(getGenreList); 
    this.errorMessage$ = this.store.select(getErrorGenre); 
  }

}
