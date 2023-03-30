import { Injectable } from '@angular/core'; 
import { ItemsService } from '../services/items/items.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import {loadItemListAction, loadItemListSuccessAction} from '../actions/items.actions'
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class itemListEffects{

    constructor( private actions$ : Actions, private itemService : ItemsService ){}

    loadProducts$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(loadItemListAction), 
            mergeMap(() => this.itemService.itemWithProducerList$.pipe(
                map(itemList => loadItemListSuccessAction({itemList})),
                tap(data => console.log('effffffeccccctssss', data))
            )),
            tap(data => console.log('effffffeccccctssss', data))
        )
    })


}