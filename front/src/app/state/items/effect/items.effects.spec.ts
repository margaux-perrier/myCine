// import { Observable, of } from "rxjs";
// import { TestBed } from "@angular/core/testing";
// import { itemListEffects } from "./items.effects";
// import { provideMockActions } from '@ngrx/effects/testing';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { loadItemListAction, loadItemListSuccessAction } from "../actions/items.actions";
// import { TestScheduler } from 'rxjs/testing';
// import { ItemsService } from "src/app/core/services/items/items.service";
// import { State } from "../../app.state";
// import { IItem } from "src/app/core/models/item";
// import { ItemListState } from "../reducer/items.reducer";
// import { ActionsSubject, Action } from '@ngrx/store';

// const mockedItemList : IItem[] = [
//     {
//         id : 1, 
//         name : 'mascarade', 
//         avatar : 'mascarade.png', 
//         producerId : 1, 
//         actorIds : [8,9,16], 
//         year : 1982, 
//         duration: 120, 
//         description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
//         type : 'film', 
//         genreIds : [1,2],
//         rating : 2.5,
//         classification : 'tous publics'
//     },
// ]; 

// const initialState = { 
//     itemList : [], 
//     currentItemId : null, 
//     error : ''
// }; 

// describe('itemListEffects', () => {
    

//     const mockItemsService : ItemsService = jasmine.createSpyObj(['itemList$', 'itemWithProducerActorGenreList$', 'searchedItems$', 'searchValueAction$', 'onSearchItems', 'handleError',]);

//     let actions$: Observable<any>;
//     let effects : itemListEffects; 
//     let store : MockStore<State>; 
//     let httpService: ItemsService;
//     // let testScheduler: TestScheduler;

//     // beforeEach(() => {
//     //     TestBed.configureTestingModule({
//     //         providers : [
//     //             itemListEffects, 
//     //             provideMockStore({initialState}), 
//     //             provideMockActions(() => actions$), 
//     //             { provide : ItemsService, useValue : mockItemsService }
//     //         ]
//     //     })

//     //     effects = TestBed.inject(itemListEffects); 
//     //     store = TestBed.inject(MockStore); 
//     //     httpService = TestBed.inject(ItemsService);
//     // }); 

//     // it('should be created', () => {
//     //     expect(effects).toBeTruthy();
//     //     expect(httpService).toBeTruthy();
//     // });

//     // it('should handle the loadItemsListAction and return a loadItemListSuccessAction', (done) => {
    
//     //     // //act 
//     //     const actions = new ActionsSubject(); 
//     //     const effects = new itemListEffects(actions, httpService); 
//     //     const result : Action[] = []; 
//     //     // actions$ = of(loadItemListAction); 
//     //     // const expectedAction = loadItemListSuccessAction( { itemList : mockedItemList } ); 
//     //     effects.loadItems$.subscribe((action) => {
//     //         console.log('testtttttttttttttt')
//     //         result.push(action)
//     //         done()
//     //     })

//     //     // // assert 
//     //     // effects.loadItems$.subscribe( x => {
//     //     //     expect(x).toEqual(expectedAction); 
//     //     // })


//     //     // const action = loadItemListAction(); 

//     //     // testScheduler.run(({ hot, cold, expectObservable}) => {
//     //     //     actions$ = hot('-a', { a: action}); 
//     //     //     const response = cold('--a|', { a: itemList }); 
//     //     //     mockItemsService.searchedItems$.subscribe( x => cold('-a|', { a: itemList })); 
//     //     //     expectObservable(effects.loadItems$).toBe('---b', { b: expectedAction })
//     //     // })
//     // });

// })

