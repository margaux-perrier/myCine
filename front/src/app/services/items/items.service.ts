import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItem } from 'src/app/models/item';
import { Observable, catchError, throwError, combineLatest, map, BehaviorSubject } from 'rxjs';
import { ProducerService } from '../producer/producer.service';
import { GenreService } from '../genre/genre.service'; 

//commenter JSDOC 
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemListUrl = 'api/itemList'; 

  constructor( private http: HttpClient, private producerService : ProducerService, private genreService : GenreService) {}

  itemList$ = this.http.get<IItem[]>(this.itemListUrl).pipe(
    catchError(this.handleError)
  ); 
  
  itemWithProducerList$ = combineLatest([
    this.itemList$,
    this.producerService.producerList$,
  ]).pipe( 
    map(([itemList, producerList]) => 
      itemList.map( item => ({
        ...item, 
        producer : producerList.find( producer => producer.id === item.producerId),
    } as IItem )),
    ), 
    // tap((data : any) => console.log('>>>>>>>ICI itemsWithCategory', data)), 
  );

  //action stream 
  private filterItemsSubject = new BehaviorSubject<number[]>([]);
  filterItemsActions$ = this.filterItemsSubject.asObservable(); 
      
  filteredItems$ = combineLatest([
    this.itemWithProducerList$, 
    this.filterItemsActions$
  ]).pipe(
    map(([itemList, selectedGenreIdList])=>
      itemList.filter((item : IItem) => {
        if(selectedGenreIdList.length >0){
          return item.genre.map(id => selectedGenreIdList.includes(id)).includes(true)
        }else{
          return true
        }
      }, 
    )),
    // tap((data : IItem[]) => console.log('>>>>>>>>>>>>>>> FILTERED ITEMS, ', data)),
  )
    
  
  //emit a value to the action stream each time the user selected a tag
  onSelected(arrayId : number[]){
    this.filterItemsSubject.next(arrayId); 
  }

  //A COMMENTER JSDOC
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
