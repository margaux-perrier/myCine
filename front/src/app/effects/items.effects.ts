import { Injectable } from '@angular/core'; 
import { ItemsService } from '../services/items/items.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import {loadItemListAction, loadItemListFailure, loadItemListSuccessAction} from '../actions/items.actions'
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

/** @class
* effect
* @param {Action} action$
* @param {ItemsService} itemsService - service
* @return {Action} action$ - new action
*/
@Injectable()
export class itemListEffects{

    constructor( private actions$ : Actions, private itemService : ItemsService ){}

    loadProducts$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(loadItemListAction), 
            mergeMap(() => this.itemService.itemWithProducerList$.pipe(
                map(itemList => loadItemListSuccessAction({itemList})),
                catchError(error => of(loadItemListFailure({error}))),
                tap(data => console.log('EFFECTS', data))
            )),
        )
    })


}