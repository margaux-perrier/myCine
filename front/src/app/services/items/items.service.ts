import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItem } from 'src/app/models/item';

import { Observable, tap, catchError, throwError, combineLatest, map } from 'rxjs';
import { ProducerService } from '../producer/producer.service';

//commenter JSDOC 
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemListUrl = 'api/itemList'; 

  constructor( private http: HttpClient, private producerService : ProducerService ) {}

  itemList$ = this.http.get<IItem[]>(this.itemListUrl).pipe(
    // tap((data: IItem[]) => console.log('Items: service', JSON.stringify(data))),
    catchError(this.handleError)
  ); 
  
  itemWithProducerList$ = combineLatest([
    this.itemList$,
    this.producerService.producerList$
  ]).pipe( 
    map(([itemList, producerList]) => 
      itemList.map( item => ({
        ...item, 
        producer : producerList.find( producer => producer.id === item.producerId)
    } as IItem )),
    ), 
    tap((data : any) => console.log('>>>>>>>ICI itemsWithCategory', data)), 
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
