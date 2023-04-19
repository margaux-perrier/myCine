import { Injectable } from '@angular/core'; 
import { ItemsService } from '../../../core/services/items/items.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import { loadItemListAction, loadItemListFailure, loadItemListSuccessAction } from '../actions/items.actions'
import { catchError, map,mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

/** @class
* effect retrieve itemList 
* @param { Action } action$
* @param { ItemsService } itemsService - service
* @return { Action } action$ - new action
*/
@Injectable()
export class itemListEffects{

    constructor( private actions$ : Actions, private itemsService : ItemsService ){}

    loadItems$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(loadItemListAction), 
            mergeMap(() => this.itemsService.searchedItems$.pipe(
                map(itemList => loadItemListSuccessAction({itemList})),
                catchError(error => of(loadItemListFailure({error}))),
            )),
        )
    })
}