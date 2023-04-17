import { IItem } from "src/app/core/models/item"
import { LibraryState } from "../reducer/library.reducer"
import { getFavorisList } from "./library.selectors"
import { provideMockStore, MockStore } from '@ngrx/store/testing'; 
import { ItemListState } from "../../items/reducer/items.reducer";
import { TestBed } from "@angular/core/testing";

describe('Library Selector', () => {
    let store: MockStore;
    const initialState = {
        items : {
            itemList : [
                {
                    id :1, 
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
                {
                    id : 2, 
                    name : 'foehe', 
                    producerId : 2, 
                    actorIds : [10,11,12], 
                    avatar : 'foehe.png', 
                    year : 2021, 
                    duration: 101,
                    description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
                    type : 'film', 
                    genreIds : [3],
                    rating : 4,
                    classification : 'tous publics'
                },
                {
                    id : 3, 
                    name : 'test', 
                    producerId : 2, 
                    actorIds : [10,8,12], 
                    avatar : 'test.png', 
                    year : 2020, 
                    duration: 120,
                    description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
                    type : 'film', 
                    genreIds : [2],
                    rating : 4.5,
                    classification : 'tous publics'
                }
            ], 
            currentItemId: null, 
            error : '',
        } as ItemListState,
        library : {
            favorisIdList : [1,3], 
            watchedIdList : [],
            wishIdList : [],   
            error : '',  
        } as LibraryState
    } 

    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         providers: [ provideMockStore({ initialState })],
    //     });
    
    //     store = TestBed.inject(MockStore); 
    // })


    it('should select the favorite items', () => {
        console.log('IDLIST' , initialState.library.favorisIdList); 
        console.log('IDLIST' , initialState.items.itemList); 
        const result = getFavorisList.projector(initialState, initialState.library.favorisIdList, initialState.items.itemList); 
        console.log('RESULT' , result); 
        expect(result.length).toEqual(2); 
        expect(result[0].id).toEqual(1); 
        expect(result[1].id).toEqual(3); 
    })

})



function newItemList() : IItem[] {
    return [
        {
            id :1, 
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
        }
    ]
}