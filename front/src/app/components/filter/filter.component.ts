import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { GenreService } from 'src/app/services/genre/genre.service';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  constructor(private genreService: GenreService, private itemsService : ItemsService ) { }
  
  errorMessage = ''; 
  genreIdList : number[] = []; 

  genreList$ = this.genreService.genreList$.pipe(
    catchError(err => {
      this.errorMessage = err; 
      return EMPTY; 
    })
  ); 

  onSelected(e : Event){
    let id = (e.target as HTMLSelectElement).id; 
    this.genreIdList.push(Number(id));  
    console.log(id)
    this.itemsService.onSelected(this.genreIdList); 
  }


  ngOnInit(): void {}

}
