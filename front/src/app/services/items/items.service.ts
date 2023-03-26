import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItem } from 'src/app/models/item';

import { Observable, tap, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsUrl = 'api/itemList'; 
  private genreUrl = 'api/genreList'; 
  private producerUrl = 'api/producerList'; 

  constructor( private http: HttpClient ) {}
  
  items$ = this.http.get<IItem[]>(this.itemsUrl)
    .pipe(
      tap((data: IItem[]) => console.log('Items: ', JSON.stringify(data))),
      catchError(this.handleError)
    ); 
  
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
