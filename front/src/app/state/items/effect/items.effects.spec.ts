import { Observable, of } from "rxjs";
import { itemListEffects } from "./items.effects";
import {  MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { State } from "../../app.state";
import { ItemsService } from "src/app/core/services/items/items.service";
import { TestBed } from "@angular/core/testing";
// import { TestScheduler } from 'rxjs/testing';
import { IItem } from "src/app/core/models/item";
import { loadItemListAction, loadItemListSuccessAction } from "../actions/items.actions";

const mockedItemList : IItem[] = [
    {
        id : 1, 
        name : 'mascarade', 
        avatar : 'mascarade.png', 
        producerId : 1, 
        actorIds : [8,9,16], 
        year : 1982, 
        duration: 120, 
        description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
        type : 'film', 
        genreIds : [1,2], 
        rating : 2.5,
        classification : 'tous publics'
    },
]; 

describe('itemListEffects', async() => {
  
    const initialState = { 
        itemList : [], 
        currentItemId : null, 
        error : ''
    }; 

    const mockItemsService : ItemsService = jasmine.createSpyObj(['ItemsService', 'itemWithProducerActorGenreList$', 'searchedItems$', 'searchValueAction$', 'onSearchItems', 'handleError',]);

    let actions$: Observable<any>;
    let effects : itemListEffects; 
    let store : MockStore<State>; 
    // let testScheduler : TestScheduler;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                itemListEffects, 
                provideMockStore({initialState}), 
                provideMockActions(() => actions$), 
                { provide : ItemsService, useValue : mockItemsService }
            ]
        })

        effects = TestBed.inject(itemListEffects); 
        store = TestBed.inject(MockStore); 

        // testScheduler = new TestScheduler((actual, expected) => {
        //     expect(actual).toEqual(expected);
        //   });
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
        expect(store).toBeTruthy();
    });

    // it('should handle the loadItemsListAction and return a loadItemListSuccessAction', () => {
    //    const action = loadItemListAction(); 
    //    const expectedAction = loadItemListSuccessAction( { itemList : mockedItemList }); 
    //    testScheduler.run(({ hot, cold, expectObservable }) => {
    //     actions$ = hot('-a', { a: action });
    //     const response = cold('-b|', { b: mockedItemList });
    //     mockItemsService.searchedItems$ = of(mockedItemList);
    //     expectObservable(effects.loadItems$).toBe('-b', { b: expectedAction });
    //     });
    // }); 

    it('should handle the loadItemsListAction and return a loadItemListSuccessAction', () => {
        actions$ = of(loadItemListAction());
        mockItemsService.searchedItems$ = of(mockedItemList); 
        effects.loadItems$.subscribe( action => {
          expect(action).toEqual(loadItemListSuccessAction({itemList : mockedItemList}) );
        });
    });

}); 


