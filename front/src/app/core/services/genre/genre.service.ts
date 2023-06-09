import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, map, shareReplay } from 'rxjs';
import { IGenre } from 'src/app/core/models/genre';

/** @class
* retrieve genre list from back-end 
* @param { Http } Http service
*/
@Injectable({
  providedIn: 'root'
})
export class GenreService { 
  private genreListUrl = 'api/genreList'; 
  
  constructor( private http: HttpClient ) {}
  
  genreList$ = this.http.get<IGenre[]>(this.genreListUrl)
  .pipe(
    map(genreList => 
      genreList.map(genre => ({
        ...genre,
        checked : false
      } as IGenre))), 
    shareReplay(1),
    catchError(this.handleError)
  ); 
  
  
   /** @function handleError
   * handle error - retrieve error when a client-side or network error occured or when the backend return an unsuccessful response code.
   * @param { HttpErrorResponse } err
   * @returns { Observable } errorMessage 
   */
  handleError(err: HttpErrorResponse): Observable<never> {
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