import { Injectable } from '@angular/core'; 
import { ItemsService } from '../../core/services/items/items.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import {loadItemListAction, loadItemListFailure, loadItemListSuccessAction} from '../items/actions/items.actions'
import { catchError, delay, map,mergeMap,switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';

/** @class
* effect retrieve itemList 
* @param { Action } action$
* @param { ItemsService } itemsService - service
* @return { Action } action$ - new action
*/
@Injectable()
export class itemListEffects{

    constructor( private actions$ : Actions, private itemsService : ItemsService, private store : Store<State> ){}

    loadItems$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(loadItemListAction), 
            switchMap(() => this.itemsService.searchedItems$.pipe(
                delay(1000), 
                map(itemList => loadItemListSuccessAction({itemList})),
                catchError(error => of(loadItemListFailure({error}))),
            )),
        )
    }); 

    // loadItems$ = createEffect(() => {
    //     return this.actions$
    //     .pipe(
    //         ofType(loadItemListAction), 
    //         mergeMap(() => this.itemsService.itemWithProducerActorGenreList$.pipe(
    //             map(itemList => loadItemListSuccessAction({itemList})),
    //             catchError(error => of(loadItemListFailure({error}))),
    //         )),
    //     )
    // })


}