import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItem } from 'src/app/models/item';
import { Observable, catchError, throwError, combineLatest, map, BehaviorSubject, tap, shareReplay } from 'rxjs';
import { PeopleService } from '../people/people.service';
import { GenreService } from '../genre/genre.service'; 

/** @class
* retrieve movies and series from back-end and combine it with producer list
* @param {Http} Http service
* @param {ProducerService} producer service
*/
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemListUrl = 'api/itemList'; 

  constructor( private http: HttpClient, private peopleService : PeopleService, private genreService : GenreService) {}

  itemList$ = this.http.get<IItem[]>(this.itemListUrl).pipe(
    catchError(this.handleError)
  ); 
  
  itemWithProducerActorGenreList$ = combineLatest([
    this.itemList$,
    this.peopleService.peopleList$,
    this.genreService.genreList$
  ]).pipe( 
    map(([itemList, peopleList, genreList]) => 
      itemList.map( item => ({
        ...item, 
        producer : peopleList.find( people => people.id === item.producerId),
        actors : item.actorIds.map(id => peopleList.find( actor => id === actor.id)), 
        genres : item.genreIds.map( id => genreList.find(genre => id === genre.id))
    } as IItem )),
    ), 
    shareReplay(1) //à voir si besoin ? 
  );

  //action stream (searchBar)
  private searchValueSubject = new BehaviorSubject<string>('');
  searchValueActions$ = this.searchValueSubject.asObservable(); 
      
  searchedItems$ = combineLatest([
    this.itemWithProducerActorGenreList$,  
    this.searchValueActions$
  ]).pipe(
    map(([itemList, searchValue]) => 
      itemList.filter( (item : IItem) => {
        if(searchValue.length >0){
          const searchText = searchValue.toLowerCase(); 
          return item.name.toLowerCase().includes(searchText) || item.producer?.firstname.toLowerCase().includes(searchText)
        }else{
          return true 
        }
      }) as IItem[]
    ),
    shareReplay(1),
  )
  
  // emit a value to the action stream when the user search an item
  onSearchItems(searchValue : string){
    this.searchValueSubject.next(searchValue); 
  }

  /** @function handleError
   * handle error + rajouter cas d'utilisation 
   * @param {HttpErrorResponse} err
   * @returns {Observable} errorMessage 
   */
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
