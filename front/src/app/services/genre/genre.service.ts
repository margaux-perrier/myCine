import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError, combineLatest } from 'rxjs';
import { IGenre } from 'src/app/models/genre';


@Injectable({
  providedIn: 'root'
})
export class GenreService { 
  private genreListUrl = 'api/genreList'; 
  

  constructor( private http: HttpClient ) {}
  
  genreList$ = this.http.get<IGenre[]>(this.genreListUrl)
    .pipe(
      tap((data: IGenre[]) => console.log('Genre: service', JSON.stringify(data))),
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