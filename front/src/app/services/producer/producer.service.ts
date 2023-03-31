import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProducer } from 'src/app/models/producer';
import { catchError, Observable, throwError } from 'rxjs';

/** @class
* retrieve producer list from back-end 
* @param {Http} Http service
*/
@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  private producerListUrl = 'api/producerList';

  constructor( private http: HttpClient ) {}

  producerList$ = this.http.get<IProducer[]>(this.producerListUrl)
  .pipe(
    catchError(this.handleError)
  ); 

  /** @function handleError
   * handle error
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
