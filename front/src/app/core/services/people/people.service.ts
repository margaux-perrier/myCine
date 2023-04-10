import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPeople } from 'src/app/core/models/people';
import { catchError, Observable, throwError } from 'rxjs';

/** @class
* retrieve people list from back-end 
* @param { Http } Http service
*/
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleListUrl = 'api/peopleList';

  constructor( private http: HttpClient ) {}

  peopleList$ = this.http.get<IPeople[]>(this.peopleListUrl)
  .pipe(
    catchError(this.handleError)
  ); 

   /** @function handleError
   * handle error - retrieve error when a client-side or network error occured or when the backend return an unsuccessful response code.
   * @param { HttpErrorResponse } err
   * @returns { Observable } errorMessage 
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
